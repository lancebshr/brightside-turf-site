import { Mail, Phone } from "lucide-react";

type ContactStripProps = {
  phone: string;
  email: string;
  note: string;
};

export function ContactStrip({ phone, email, note }: ContactStripProps) {
  return (
    <section className="flex flex-col gap-6 rounded-[2.5rem] bg-pine px-6 py-8 text-white md:flex-row md:items-center md:justify-between md:px-12">
      <p className="text-2xl font-bold text-mint">{note}</p>
      <div className="flex flex-wrap gap-4">
        <a
          href={`tel:${phone.replace(/[^0-9]/g, "")}`}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20"
        >
          <Phone className="size-4" />
          {phone}
        </a>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20"
        >
          <Mail className="size-4" />
          {email}
        </a>
      </div>
    </section>
  );
}
