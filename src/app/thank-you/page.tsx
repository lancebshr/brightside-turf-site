export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0B3352] via-[#0d4168] to-[#134b79] px-4 text-white">
      <div className="max-w-xl text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.25em] text-white/70">Thank You</p>
        <h1 className="text-5xl font-black leading-tight">We received your request.</h1>
        <p className="text-lg text-white/80">
          Our team will reach out within one business day with your quote details. If you need
          anything sooner, call us at <a href="tel:(402) 810-8692" className="font-semibold text-white underline"> (402) 810-8692</a>.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <a
            href="/"
            className="w-full max-w-md rounded-full bg-white px-6 py-4 text-lg font-bold text-[#0B3352] shadow-lg transition hover:translate-y-[-2px] hover:shadow-xl"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
