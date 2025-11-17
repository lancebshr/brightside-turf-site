import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";

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
            className="mt-6 rounded-full border border-pine/10 bg-pine px-8 py-6 text-lg font-semibold text-white hover:bg-pine/90"
          >
            <a href={cta.href}>{cta.label}</a>
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
