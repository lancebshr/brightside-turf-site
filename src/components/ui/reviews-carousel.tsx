"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { BOLD_PLUS_HEADING } from "@/lib/utils";

const CARD_GAP = 24; // matches Tailwind gap-6 (1.5rem)
const CARD_WIDTH_FACTOR = 1; // default width factor (no shrink)

export type Review = {
  name: string;
  quote: string;
};

type ReviewsCarouselProps = {
  heading?: string;
  subheading?: string;
  reviews: Review[];
  hideHeader?: boolean;
};

const getVisibleCount = (width: number, total: number) => {
  if (width < 640) return Math.min(1, total);
  if (width < 1024) return Math.min(2, total);
  return Math.min(3, total);
};

const formatReviewerName = (name: string) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  const last = parts[parts.length - 1];
  const initial = last[0]?.toUpperCase() ?? "";
  return `${parts[0]} ${initial}.`;
};

export function ReviewsCarousel({
  heading,
  subheading,
  reviews,
  hideHeader = false,
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
      setCardWidth((effectiveWidth / visibleCount) * CARD_WIDTH_FACTOR);
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
      className={`space-y-10 px-4 sm:px-8 lg:px-12 ${hideHeader ? "pt-6 pb-4" : "py-16"}`}
    >
      {!hideHeader && (
        <FadeInSection className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-8">
          <h2 className={BOLD_PLUS_HEADING}>{heading}</h2>
          {subheading && <p className="text-lg font-semibold text-slate-600">{subheading}</p>}
        </FadeInSection>
      )}

      <div className="relative">
        <div className="mb-4 flex animate-float items-center justify-center gap-2">
          <span className="text-lg font-bold tracking-tight text-slate-800">Over 150</span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 text-[#FABB05]" fill="#FABB05" />
            ))}
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-800">Reviews</span>
        </div>
        <div className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-8">
          <div
            className="-m-10 overflow-hidden p-10 pl-0"
            ref={viewportRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-6 transition-transform duration-700 ease-out"
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
                    <article className="flex h-full flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-shadow hover:shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-pine text-xl font-semibold text-white">
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-lg font-medium text-slate-900">
                            {formatReviewerName(review.name)}
                          </span>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <Star
                                key={starIndex}
                                className="size-5 text-[#FABB05]"
                                fill="#FABB05"
                              />
                            ))}
                          </div>
                        </div>
                        <Image
                          src="/icons8-google-48.png"
                          alt="Google"
                          width={32}
                          height={32}
                          className="ml-auto shrink-0"
                        />
                      </div>
                      <p className="flex-1 text-base leading-relaxed text-slate-600">{review.quote}</p>
                    </article>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 -left-20 hidden items-center lg:flex">
          <CarouselButton
            direction="prev"
            onClick={() => goTo("prev")}
            ariaLabel="Previous review"
            disabled={maxIndex === 0}
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 -right-20 hidden items-center lg:flex">
          <CarouselButton
            direction="next"
            onClick={() => goTo("next")}
            ariaLabel="Next review"
            disabled={maxIndex === 0}
          />
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 lg:hidden">
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
    className="pointer-events-auto rounded-2xl border-2 border-pine/20 bg-white p-4 text-pine shadow-lg transition-all hover:border-pine/40 hover:bg-pine hover:text-white hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
  >
    {direction === "prev" ? (
      <ChevronLeft className="size-7" strokeWidth={3} />
    ) : (
      <ChevronRight className="size-7" strokeWidth={3} />
    )}
  </button>
);
