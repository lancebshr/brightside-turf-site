"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";

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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused, reviews.length]);

  useEffect(() => {
    if (!trackRef.current) return;
    const width = trackRef.current.clientWidth;
    trackRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
  }, [index]);

  const goTo = (direction: "next" | "prev") => {
    setIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % reviews.length;
      }
      return prev === 0 ? reviews.length - 1 : prev - 1;
    });
  };

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="space-y-8"
    >
      <FadeInSection className="flex flex-col gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pine/70">
          Here&apos;s what Omaha families say
        </p>
        <h2 className="text-4xl font-bold text-pine">{heading}</h2>
        <p className="text-lg text-slate-600">{subheading}</p>
      </FadeInSection>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-hidden rounded-3xl"
        >
          {reviews.map((review, i) => (
            <article
              key={`${review.name}-${i}`}
              className="flex min-w-full snap-center flex-col gap-6 bg-white/90 p-8 text-left shadow-brand ring-1 ring-slate-100 lg:min-h-[260px]"
            >
              <div className="flex items-center gap-1 text-pine">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="size-4 fill-pine/90 text-pine/90"
                  />
                ))}
              </div>
              <p className="text-lg text-ink/90">{review.quote}</p>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pine/70">
                {review.name}
              </span>
            </article>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <CarouselButton
            direction="prev"
            onClick={() => goTo("prev")}
            ariaLabel="Previous review"
          />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <CarouselButton
            direction="next"
            onClick={() => goTo("next")}
            ariaLabel="Next review"
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
};

const CarouselButton = ({
  direction,
  onClick,
  ariaLabel,
}: CarouselButtonProps) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className="rounded-full border border-white/70 bg-white/80 p-3 text-pine shadow-brand backdrop-blur hover:bg-white"
  >
    {direction === "prev" ? (
      <ChevronLeft className="size-5" />
    ) : (
      <ChevronRight className="size-5" />
    )}
  </button>
);
