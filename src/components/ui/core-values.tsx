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
    icon: <Sparkles className="size-16 sm:size-20" />,
  },
  {
    title: "We Make It Personal",
    body: "Friendly techs, proactive updates, and quick follow-ups if anything feels off.",
    icon: <Users className="size-16 sm:size-20" />,
  },
  {
    title: "“Good Enough” Isn’t Good Enough",
    body: "We hold ourselves to a higher standard because that’s what Omaha families deserve.",
    icon: <BadgeCheck className="size-16 sm:size-20" />,
  },
];

type Value = {
  title: string;
  body: string;
  icon?: React.ReactNode;
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
  const topValues = values.slice(0, 2);
  const bottomValue = values.slice(2, 3);

  return (
    <div className={cn("relative overflow-hidden space-y-10 py-6 md:py-10", className)}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#d9f2e5]/60 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-16 h-40 w-60 bg-gradient-to-tr from-[#c7f0de]/70 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-16 h-40 w-60 bg-gradient-to-tl from-[#c7f0de]/70 via-transparent to-transparent blur-3xl" />
      <div className="space-y-4 text-center">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pine/80">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold italic text-pine">{heading}</h2>
        {description && <p className="text-base text-ink/60">{description}</p>}
      </div>

      <div className="mt-16 space-y-14">
        <div className="grid gap-y-14 gap-x-12 md:grid-cols-2">
          {topValues.map((value, index) => (
            <div
              key={value.title}
              className="flex items-start gap-5"
            >
            <div
              className="flex size-20 flex-shrink-0 items-center justify-center text-pine opacity-0 animate-fade-in drop-shadow-[0_15px_30px_rgba(22,60,90,0.25)] md:justify-start"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {value.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold leading-tight text-pine">
                  {value.title}
                </h3>
                <p className="text-lg text-ink/80">{value.body}</p>
              </div>
            </div>
          ))}
        </div>

        {bottomValue.length > 0 && (
          <div className="mx-auto max-w-3xl">
            {bottomValue.map((value, index) => (
              <div
                key={value.title}
                className="flex items-start gap-6"
              >
                <div
                className="flex size-24 flex-shrink-0 items-center justify-center text-pine opacity-0 animate-fade-in drop-shadow-[0_18px_30px_rgba(22,60,90,0.3)] md:justify-start"
                  style={{ animationDelay: `${(index + topValues.length) * 120}ms` }}
                >
                  {value.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold leading-tight text-pine">
                    {value.title}
                  </h3>
                  <p className="text-lg text-ink/80">{value.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}
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
