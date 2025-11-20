"use client";

import { FormEvent, ReactNode, useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  services: string[];
};

const REFERRAL_SOURCES = [
  "Referral",
  "Google",
  "Facebook",
  "Personal Connection",
  "Door Hanger",
  "Yard Sign",
  "Vehicles",
];

export function LeadForm({ services }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [serviceError, setServiceError] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedServices.length === 0) {
      setServiceError(true);
      return;
    }

    setServiceError(false);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      window.setTimeout(() => setShowToast(false), 4000);
    }, 1000);
  };

  return (
    <div className="rounded-[2.5rem] p-6 text-ink md:p-5">
      <form
        onSubmit={handleSubmit}
        className="mt-1 space-y-2"
        action="#"
        method="post"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <Field label="Name" htmlFor="name" required>
            <Input
              id="name"
              name="name"
              placeholder="Jane Smith"
              required
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
            />
          </Field>
          <Field label="Phone" htmlFor="phone" required>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(402) 555-0190"
              required
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
            />
          </Field>
        </div>

        <Field label="Email" htmlFor="email" required>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="hello@brightsideturf.com"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          />
        </Field>

        <Field label="Address" htmlFor="address" required>
          <Input
            id="address"
            name="address"
            placeholder="1234 Pine Street"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          />
        </Field>

        <div className="grid gap-3 md:grid-cols-2">
          <Field label="City" htmlFor="city" required>
            <Input
              id="city"
              name="city"
              placeholder="Omaha"
              required
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
            />
          </Field>
          <Field label="Zip" htmlFor="zip" required>
            <Input
              id="zip"
              name="zip"
              placeholder="68104"
              required
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
            />
          </Field>
        </div>

        <Field label="Select Services" required>
          {selectedServices.map((service) => (
            <input key={service} type="hidden" name="services" value={service} />
          ))}
          <div className="space-y-1 rounded-2xl border border-slate-200 bg-white p-2">
            {services.map((service) => {
              const active = selectedServices.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-left text-base transition",
                    active
                      ? "border-slate-200 bg-slate-100 font-semibold text-pine shadow-sm"
                      : "text-ink hover:bg-slate-50"
                  )}
                  onClick={() => {
                    setSelectedServices((prev) =>
                      active ? prev.filter((item) => item !== service) : [...prev, service]
                    );
                    setServiceError(false);
                  }}
                >
                  <span>{service}</span>
                  {active && (
                    <span className="text-xs uppercase tracking-wide text-pine">Added</span>
                  )}
                </button>
              );
            })}
          </div>
          {serviceError && (
            <p className="text-sm font-semibold text-red-500">
              Please select at least one service.
            </p>
          )}
        </Field>

        <Field label="How Did You Find Us?" htmlFor="referralSource" required>
          <select
            id="referralSource"
            name="referralSource"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          >
            <option value="">Select one</option>
            {REFERRAL_SOURCES.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </Field>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-pine py-6 text-base text-white hover:bg-pine/90"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>

      <div
        aria-live="polite"
        className={cn(
          "pointer-events-none fixed inset-0 flex items-center justify-center transition opacity-0",
          showToast && "opacity-100"
        )}
      >
        <div className="flex flex-col items-center gap-4 rounded-[2rem] bg-ink px-10 py-8 text-center text-white shadow-2xl">
          <Image
            src="/BrightsideLogo.svg"
            alt="Brightside Turf"
            width={280}
            height={80}
            className="h-auto w-60 object-contain"
          />
          <div className="flex items-center gap-3 text-lg font-semibold">
            <CheckCircle2 className="size-6 text-mint" />
            Thanks! We&apos;ll get back to you within 24 hours.
          </div>
        </div>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: ReactNode;
};

function Field({ label, htmlFor, required, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-pine">*</span>}
      </Label>
      {children}
    </div>
  );
}
