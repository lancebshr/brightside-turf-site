"use client";

import { FormEvent, ReactNode, useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedServices = formData.getAll("services");
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
    <div className="rounded-[2.5rem] bg-white p-6 text-ink shadow-brand md:p-5">
      <form
        onSubmit={handleSubmit}
        className="mt-2 grid gap-4"
        action="#"
        method="post"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Name" htmlFor="name" required>
            <Input id="name" name="name" placeholder="Jane Smith" required />
          </Field>
          <Field label="Address" htmlFor="address" required>
            <Input
              id="address"
              name="address"
              placeholder="1234 Pine Street"
              required
            />
          </Field>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Email" htmlFor="email" required>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="hello@brightsideturf.com"
              required
            />
          </Field>
          <Field label="Phone" htmlFor="phone" required>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(402) 555-0190"
              required
            />
          </Field>
        </div>

        <Field label="Services interested in" required>
          <p className="text-sm text-slate-500">
            Select at least one service that you&apos;re interested in.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => {
              const id = `service-${service
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`;
              return (
                <label
                  key={service}
                  htmlFor={id}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm font-medium text-ink shadow-sm"
                >
                  <input
                    type="checkbox"
                    id={id}
                    name="services"
                    value={service}
                    className="service-checkbox size-4 rounded border-slate-300 text-pine focus:ring-pine"
                    onChange={() => setServiceError(false)}
                  />
                  {service}
                </label>
              );
            })}
          </div>
          {serviceError && (
            <p className="text-sm font-semibold text-red-500">
              Please choose at least one service.
            </p>
          )}
        </Field>

        <Field label="How did you find us?" htmlFor="referralSource" required>
          <select
            id="referralSource"
            name="referralSource"
            required
            className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
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
            src="/Brightside%20Black.png"
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
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-pine">*</span>}
      </Label>
      {children}
    </div>
  );
}
