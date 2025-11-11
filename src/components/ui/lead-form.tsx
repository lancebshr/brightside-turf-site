"use client";

import { FormEvent, ReactNode, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  services: string[];
};

export function LeadForm({ services }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      window.setTimeout(() => setShowToast(false), 4000);
    }, 1000);
  };

  return (
    <div className="rounded-[2.5rem] bg-white p-6 shadow-brand md:p-10">
      <div className="space-y-3 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pine/70">
          Ready to get started?
        </p>
        <h2 className="text-4xl font-bold text-pine">
          Tell us about your lawn.
        </h2>
        <p className="text-lg text-slate-600">
          We&apos;d love to take care of your home. Tell us what you want
          information on, and we&apos;ll reach out within 24 hours.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-6"
        action="#"
        method="post"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Name" htmlFor="name" required>
            <Input id="name" name="name" placeholder="Jane Smith" required />
          </Field>
          <Field label="Address (optional)" htmlFor="address">
            <Input
              id="address"
              name="address"
              placeholder="1234 Pine Street"
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

        <Field label="Services interested in" htmlFor="services" required>
          <select
            id="services"
            name="services"
            multiple
            required
            className="min-h-[140px] rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-base text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <p className="text-sm text-slate-500">
            Hold Command (⌘) or Control to select multiple.
          </p>
        </Field>

        <Field label="How can we help?" htmlFor="message">
          <Textarea
            id="message"
            name="message"
            placeholder="Share any details or timing we should know about."
            rows={5}
          />
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
          "pointer-events-none fixed inset-x-0 bottom-6 flex justify-center transition opacity-0",
          showToast && "opacity-100"
        )}
      >
        <div className="flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-white shadow-xl">
          <CheckCircle2 className="size-4 text-mint" />
          Thanks! We&apos;ll get back to you within 24 hours.
        </div>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
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
