import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";
import {
  GET_QUOTE_BUTTON_CLASSNAME,
  GET_QUOTE_BUTTON_STYLE,
  cn,
  formatGetQuoteLabel,
} from "@/lib/utils";

type MeetBrightsideProps = {
  heading: string;
  body: string;
  cta: { href: string; label: string };
  image: { src: string; alt: string };
};

export function MeetBrightside({
  heading,
  body,
  cta,
  image,
}: MeetBrightsideProps) {
  return (
    <section
      id="about"
      className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 scroll-mt-32 bg-mint/40"
    >
      <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-6 py-16 text-ink md:grid-cols-[1.1fr_0.9fr] md:pl-16 md:pr-7 lg:pl-24">
        <FadeInSection className="flex flex-col items-center justify-center space-y-6 text-center md:items-start md:text-left">
          <h2 className="text-5xl font-bold text-pine">{heading}</h2>
          <p className="text-lg text-ink/80">{body}</p>
          <Button
            asChild
            size="lg"
            style={GET_QUOTE_BUTTON_STYLE}
            className={cn(GET_QUOTE_BUTTON_CLASSNAME, "mt-6")}
          >
            <Link href={cta.href}>
              {formatGetQuoteLabel(cta.label)}
            </Link>
          </Button>
        </FadeInSection>

        <FadeInSection className="relative flex items-center justify-center overflow-hidden rounded-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={720}
            height={520}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine/30 to-transparent" />
        </FadeInSection>
      </div>
    </section>
  );
}
