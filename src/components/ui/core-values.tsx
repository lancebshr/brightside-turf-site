"use client";

import { ReactNode, useMemo } from "react";
import Link from "next/link";
import { Sparkles, Users, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GET_QUOTE_BUTTON_CLASSNAME,
  GET_QUOTE_BUTTON_STYLE,
  cn,
  formatGetQuoteLabel,
} from "@/lib/utils";

const DEFAULT_VALUES = [
  {
    title: "The Little Things Aren’t Little to Us",
    body: "We care about the small details because we love what we do and want you to love it too.",
    icon: <Sparkles className="size-10 md:size-14" />,
  },
  {
    title: "We Make It Personal",
    body: "Friendly techs, proactive updates, and quick follow-ups if anything feels off.",
    icon: <Users className="size-10 md:size-14" />,
  },
  {
    title: "“Good Enough” Isn’t Good Enough",
    body: "We hold ourselves to a higher standard because that’s what Omaha families deserve.",
    icon: <BadgeCheck className="size-14 md:size-20" />,
  },
];

type Value = {
  title: string;
  body: string;
  icon?: ReactNode;
};

type CoreValuesProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  values?: Value[];
  className?: string;
};

export function CoreValues({
  eyebrow,
  heading,
  description,
  values = DEFAULT_VALUES,
  className,
}: CoreValuesProps) {
  const stableValues = useMemo(() => values, [values]);

  return (
    <div
      className={cn(
        "relative space-y-8 py-10 md:space-y-10 md:py-14",
        className
      )}
    >
      <div className="space-y-4 text-center pb-4">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pine/80">
            {eyebrow}
          </p>
        )}
        <h2 className="text-5xl font-bold text-pine">
          {heading}
        </h2>
        {description && (
          <p className="text-lg text-slate-600">{description}</p>
        )}
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="relative grid gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3">
          {stableValues.map((value) => (
            <div
              key={value.title}
              className="relative min-h-[18rem] rounded-[2rem] bg-white shadow-[0_12px_30px_rgba(6,20,31,0.14)]"
            >
              <div className="flex h-full flex-col text-center">
                <div
                  className={cn(
                    "relative flex h-32 flex-col items-center rounded-t-[2rem] bg-[#0B3352] px-5 pb-4 pt-10 text-white md:h-36",
                    value.title === "We Make It Personal" ? "justify-center" : "justify-end"
                  )}
                >
                  {value.icon && (
                    <div className="absolute left-1/2 -top-8 flex h-[4rem] w-[4rem] -translate-x-1/2 items-center justify-center rounded-full bg-white text-[#0B3352] shadow-[0_6px_18px_rgba(5,15,26,0.18)] md:h-[4.5rem] md:w-[4.5rem]">
                      {value.icon}
                    </div>
                  )}
                  <p className="text-3xl font-bold leading-tight">
                    {value.title}
                  </p>
                </div>
                <div className="flex flex-1 rounded-b-[2rem] bg-white px-6 py-6 text-lg text-ink/80">
                  {value.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3 text-center">
        <Button
          asChild
          size="lg"
          style={GET_QUOTE_BUTTON_STYLE}
          className={GET_QUOTE_BUTTON_CLASSNAME}
        >
          <Link href="/get-quote">
            {formatGetQuoteLabel("Get Your Quote")}
          </Link>
        </Button>
        <p className="text-lg text-ink/80">
          Tell us about your lawn and we’ll reach out within 24 hours.
        </p>
      </div>
    </div>
  );
}
