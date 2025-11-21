"use client";

import { FormEvent, ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  services: string[];
  whiteLabels?: boolean;
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

export function LeadForm({ services, whiteLabels = false }: LeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
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
      // Reset form and clear all fields
      if (formRef.current) {
        formRef.current.reset();
      }
      setSelectedServices([]);
      window.setTimeout(() => setShowToast(false), 4000);
    }, 1000);
  };

  return (
    <div className="rounded-[2.5rem] p-6 px-14 text-ink md:p-5 md:px-28">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-1 space-y-2"
        action="#"
        method="post"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <Input
            id="name"
            name="name"
            placeholder="Name"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-6 text-base font-semibold text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          />
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-6 text-base font-semibold text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          />
        </div>

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-6 text-base font-semibold text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
        />

        <Input
          id="address"
          name="address"
          placeholder="Address"
          required
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-6 text-base font-semibold text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
        />

        <div className="grid gap-3 md:grid-cols-2">
          <Input
            id="city"
            name="city"
            placeholder="City"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-6 text-base font-semibold text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          />
          <Input
            id="zip"
            name="zip"
            placeholder="Zip"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-6 text-base font-semibold text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine/30"
          />
        </div>

        <Field label="Select Services" required labelClassName={whiteLabels ? "text-white font-bold" : undefined}>
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

        <Field label="How Did You Find Us?" htmlFor="referralSource" labelClassName={whiteLabels ? "text-white font-bold" : undefined}>
          <select
            id="referralSource"
            name="referralSource"
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
          className="w-full rounded-2xl border-0 bg-[#0B3352] px-4 py-6 text-base font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-pine/30 hover:bg-[#0d4168] disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>

      {showToast && typeof window !== "undefined"
        ? createPortal(
            <div
              aria-live="polite"
              className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
            >
              <div className="flex flex-col items-center gap-4 rounded-[2rem] bg-ink px-10 py-8 text-center text-white shadow-[0_0_40px_rgba(0,0,0,0.5)]">
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
            </div>,
            document.body
          )
        : null}
    </div>
  );
}

type FieldProps = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: ReactNode;
  labelClassName?: string;
};

function Field({ label, htmlFor, required, children, labelClassName }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className={cn("text-sm font-medium", labelClassName || "text-ink")}>
        {label} {required && <span className={labelClassName ? "text-white" : "text-pine"}>*</span>}
      </Label>
      {children}
    </div>
  );
}
