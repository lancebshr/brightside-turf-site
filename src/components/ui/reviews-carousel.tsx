"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

export function ReviewsCarousel({
  heading,
  subheading,
  reviews,
}: ReviewsCarouselProps) {
  if (reviews.length === 0) {
    return null;
  }

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === "undefined") return Math.min(3, reviews.length);
    if (window.innerWidth < 768) return 1; // mobile
    if (window.innerWidth < 1024) return Math.min(2, reviews.length); // tablet
    return Math.min(3, reviews.length); // desktop
  });

  const maxIndex = Math.max(reviews.length - visibleCount, 0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Update visibleCount on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(Math.min(2, reviews.length));
      } else {
        setVisibleCount(Math.min(3, reviews.length));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [reviews.length]);

  // Compute card width based on viewport and visibleCount
  useEffect(() => {
    const updateWidth = () => {
      if (!viewportRef.current) return;
      const containerWidth = viewportRef.current.clientWidth;
      const totalGap = CARD_GAP * (visibleCount - 1);
      const effectiveWidth = Math.max(containerWidth - totalGap, 0);
      setCardWidth(effectiveWidth / visibleCount);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [visibleCount]);

  // Clamp index if maxIndex changes
  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, maxIndex]);

  // Autoplay
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

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="space-y-8"
    >
      <FadeInSection className="flex flex-col gap-4 text-center">
        <h2 className="text-4xl font-bold text-pine">{heading}</h2>
        <p className="text-lg text-slate-600">{subheading}</p>
      </FadeInSection>

      <div className="flex items-center justify-between gap-5">
        {/* Left arrow */}
        <CarouselButton
          direction="prev"
          onClick={() => goTo("prev")}
          ariaLabel="Previous review"
          disabled={maxIndex === 0}
        />

        {/* Carousel viewport - spans most of the page, responsive card count */}
        <div className="flex-1 px-4">
          <div className="mx-auto w-full max-w-6xl">
            <div className="overflow-hidden" ref={viewportRef}>
              <div
                className="flex gap-4 transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${
                    index * (cardWidth + (visibleCount > 1 ? CARD_GAP : 0))
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
                    <article className="flex h-full flex-col gap-6 rounded-3xl p-8 text-left bg-white/90">
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
        </div>

        {/* Right arrow */}
        <CarouselButton
          direction="next"
          onClick={() => goTo("next")}
          ariaLabel="Next review"
          disabled={maxIndex === 0}
        />
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