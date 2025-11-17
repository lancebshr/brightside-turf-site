import { Mail, Phone } from "lucide-react";

type ContactStripProps = {
  phone: string;
  email: string;
  note: string;
};

export function ContactStrip({ phone, email, note }: ContactStripProps) {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 rounded-t-[10rem] rounded-b-none bg-gradient-to-b from-pine to-ink px-4 py-20 text-white sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-14 text-center">
        <p className="text-3xl font-bold tracking-tight text-mint md:text-4xl">
          {note}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${phone.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-6 py-3 text-base font-semibold text-pine transition hover:bg-white"
          >
            <Phone className="size-4" />
            {phone}
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-6 py-3 text-base font-semibold text-pine transition hover:bg-white"
          >
            <Mail className="size-4" />
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
