import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GET_QUOTE_BUTTON_CLASSNAME,
  GET_QUOTE_BUTTON_STYLE,
  formatGetQuoteLabel,
} from "@/lib/utils";

type CtaStripProps = {
  heading?: string;
  subtext?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function CtaStrip({
  heading = "Ready To Get Started?",
  subtext = "Healthy, weed-free lawns don’t happen by accident. Tell us what you need, and we’ll reach out within 24 hours.",
  ctaHref = "/get-quote",
  ctaLabel = "Get Your Quote",
}: CtaStripProps) {
  const formattedLabel = formatGetQuoteLabel(ctaLabel);

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 rounded-t-[10rem] rounded-b-none bg-gradient-to-b from-pine to-ink px-4 py-20 text-white sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {heading}
        </p>
        <p className="text-lg text-white/80">{subtext}</p>
        <Button
          asChild
          size="lg"
          style={GET_QUOTE_BUTTON_STYLE}
          className={GET_QUOTE_BUTTON_CLASSNAME}
        >
          <Link href={ctaHref}>{formattedLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
