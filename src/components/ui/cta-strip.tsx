import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GET_QUOTE_BUTTON_CLASSNAME,
  GET_QUOTE_BUTTON_STYLE,
  cn,
  formatGetQuoteLabel,
} from "@/lib/utils";

type CtaStripProps = {
  heading?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function CtaStrip({
  heading = "Ready To Get Started?",
  ctaHref = "/get-quote",
  ctaLabel = "Get Your Quote",
}: CtaStripProps) {
  const formattedLabel = formatGetQuoteLabel(ctaLabel);

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 rounded-t-[10rem] rounded-b-none bg-gradient-to-b from-pine to-ink px-4 py-20 text-white sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.3)]">
          {heading}
        </h2>
        <Button
          asChild
          size="lg"
          style={GET_QUOTE_BUTTON_STYLE}
          className={cn(GET_QUOTE_BUTTON_CLASSNAME, "px-12 py-7 text-xl")}
        >
          <Link href={ctaHref}>{formattedLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
