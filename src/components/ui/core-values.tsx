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
    icon: <Sparkles className="size-10" />,
  },
  {
    title: "We Make It Personal",
    body: "Friendly techs, proactive updates, and quick follow-ups if anything feels off.",
    icon: <Users className="size-10" />,
  },
  {
    title: "“Good Enough” Isn’t Good Enough",
    body: "We hold ourselves to a higher standard because that’s what Omaha families deserve.",
    icon: <BadgeCheck className="size-10" />,
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
  return (
    <div className={cn("space-y-12 py-6 md:py-8", className)}>
      <div className="space-y-4 text-center">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pine/80">
            {eyebrow}
          </p>
        )}
        <h2 className="text-5xl font-bold text-pine">{heading}</h2>
        {description && <p className="text-lg text-ink/80">{description}</p>}
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {values.map((value, index) => (
          <div
            key={value.title}
            className="space-y-4 rounded-3xl bg-white/80 p-8 text-center shadow-lg shadow-black/5"
          >
            <div
              className="mx-auto flex size-20 items-center justify-center text-[#1e3a4c] opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-pine">{value.title}</h3>
            <p className="text-base text-ink/80">{value.body}</p>
          </div>
        ))}
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
