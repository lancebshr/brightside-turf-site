import Image from "next/image";

export default function ThankYouPage() {
  return (
    <div className="relative flex h-screen items-center justify-center px-4 text-white overflow-hidden">
      <Image
        src="/OurServicesAeration.JPG"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

      <div className="relative z-10 max-w-2xl text-center space-y-4 px-4">
        <p className="text-lg md:text-xl uppercase tracking-[0.25em] text-white font-extrabold">Thank You</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white md:whitespace-nowrap">We received your request.</h1>
        <p className="text-base md:text-xl font-semibold text-white/80">
          Our team will reach out within one business day with your quote details. If you need
          anything sooner, call us at <a href="tel:(402) 810-8692" className="font-semibold text-[#45D1B7] underline">(402) 810-8692</a>.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <a
            href="/"
            className="w-full max-w-md rounded-full bg-[#0B3352] px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:translate-y-[-2px] hover:shadow-xl hover:brightness-110"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
