"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";

const CARD_GAP = 16; // matches Tailwind gap-4 (1rem)

export type Review = {
  name: string;
  quote: string;
};

type ReviewsCarouselProps = {
  heading: string;
  subheading: string;
  reviews: Review[];
};

const getVisibleCount = (width: number, total: number) => {
  if (width < 640) return Math.min(1, total);
  if (width < 1024) return Math.min(2, total);
  return Math.min(3, total);
};

export function ReviewsCarousel({
  heading,
  subheading,
  reviews,
}: ReviewsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window === "undefined"
      ? Math.min(1, reviews.length)
      : getVisibleCount(window.innerWidth, reviews.length)
  );
  const maxIndex =
    visibleCount > 0 ? Math.max(reviews.length - visibleCount, 0) : 0;
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const touchStartRef = useRef<number | null>(null);
  const touchCurrentRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount(window.innerWidth, reviews.length));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [reviews.length]);

  useEffect(() => {
    const updateWidth = () => {
      if (!viewportRef.current) return;
      if (visibleCount <= 0) {
        setCardWidth(0);
        return;
      }

      const containerWidth = viewportRef.current.clientWidth;
      const totalGap = CARD_GAP * (visibleCount - 1);
      const effectiveWidth = Math.max(containerWidth - totalGap, 0);
      setCardWidth(effectiveWidth / visibleCount);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [visibleCount]);

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, maxIndex]);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused, maxIndex]);

  const goTo = (direction: "next" | "prev") => {
    if (maxIndex === 0) return;
    setIndex((prev) => {
      if (direction === "next") {
        return prev === maxIndex ? 0 : prev + 1;
      }
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  if (reviews.length === 0) {
    return null;
  }

  const gapSpacing = reviews.length > 1 ? CARD_GAP : 0;

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = event.touches[0].clientX;
    touchCurrentRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    touchCurrentRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartRef.current === null ||
      touchCurrentRef.current === null ||
      Math.abs(touchStartRef.current - touchCurrentRef.current) < 30
    ) {
      touchStartRef.current = null;
      touchCurrentRef.current = null;
      return;
    }

    if (touchStartRef.current > touchCurrentRef.current) {
      goTo("next");
    } else {
      goTo("prev");
    }

    touchStartRef.current = null;
    touchCurrentRef.current = null;
  };

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="space-y-8"
    >
      <FadeInSection className="flex flex-col gap-4 text-center">
        <h2 className="text-5xl font-bold text-pine">{heading}</h2>
        <p className="text-lg text-slate-600">{subheading}</p>
      </FadeInSection>

      <div className="relative">
        <div className="mx-auto w-full px-4 sm:px-6" style={{ maxWidth: "1100px" }}>
          <div
            className="overflow-hidden"
            ref={viewportRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-4 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  visibleCount > 0 ? index * (cardWidth + gapSpacing) : 0
                }px)`,
              }}
            >
              {reviews.map((review, i) => (
                <div
                  key={`${review.name}-${i}`}
                  className="flex-shrink-0"
                  style={{
                    width: cardWidth ? `${cardWidth}px` : "100%",
                  }}
                >
                  <article className="flex h-full flex-col gap-6 rounded-3xl p-8 text-left">
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="size-4 text-[#FABB05]"
                          fill="#FABB05"
                        />
                      ))}
                      <Image
                        src="/icons8-google-48.png"
                        alt="Google"
                        width={20}
                        height={20}
                        className="shrink-0"
                      />
                    </div>
                    <p className="text-lg text-ink/90">{review.quote}</p>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pine/70">
                      {review.name}
                    </span>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center -translate-x-1/2 pl-10 md:flex">
          <CarouselButton
            direction="prev"
            onClick={() => goTo("prev")}
            ariaLabel="Previous review"
            disabled={maxIndex === 0}
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center translate-x-1/2 pr-10 md:flex">
          <CarouselButton
            direction="next"
            onClick={() => goTo("next")}
            ariaLabel="Next review"
            disabled={maxIndex === 0}
          />
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 md:hidden">
          <CarouselButton
            direction="prev"
            onClick={() => goTo("prev")}
            ariaLabel="Previous review"
            disabled={maxIndex === 0}
          />
          <CarouselButton
            direction="next"
            onClick={() => goTo("next")}
            ariaLabel="Next review"
            disabled={maxIndex === 0}
          />
        </div>
      </div>
    </section>
  );
}

type CarouselButtonProps = {
  direction: "next" | "prev";
  onClick: () => void;
  ariaLabel: string;
  disabled?: boolean;
};

const CarouselButton = ({
  direction,
  onClick,
  ariaLabel,
  disabled = false,
}: CarouselButtonProps) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    disabled={disabled}
    className="pointer-events-auto rounded-full border border-white/70 bg-white/80 p-3 text-pine shadow-brand backdrop-blur transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
  >
    {direction === "prev" ? (
      <ChevronLeft className="size-5" />
    ) : (
      <ChevronRight className="size-5" />
    )}
  </button>
);
