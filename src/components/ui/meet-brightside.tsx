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
      className="grid gap-10 rounded-[2.5rem] bg-mint/40 p-6 scroll-mt-32 md:grid-cols-[1.1fr_0.9fr] md:p-12"
    >
      <FadeInSection className="space-y-6 text-ink">
        <h2 className="text-4xl font-bold text-pine">{heading}</h2>
        <p className="text-lg text-ink/80">{body}</p>
        <Button
          asChild
          size="lg"
          className="rounded-full border border-pine/10 bg-pine px-8 py-6 text-lg font-semibold text-white hover:bg-pine/90"
        >
          <a href={cta.href}>{cta.label}</a>
        </Button>
      </FadeInSection>

      <FadeInSection className="relative overflow-hidden rounded-3xl">
        <Image
          src={image.src}
          alt={image.alt}
          width={720}
          height={520}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine/30 to-transparent" />
      </FadeInSection>
    </section>
  );
}
