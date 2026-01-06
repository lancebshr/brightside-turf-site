"use client";

import { FormEvent, ReactNode, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LeadFormProps = {
  services: string[];
  whiteLabels?: boolean;
  redirectPath?: string;
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

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/NC7jNFN6poW5MEcjBnjA/webhook-trigger/e3e3cd92-0d65-42a5-85f4-a0e81f1d88a2";

export function LeadForm({
  services,
  whiteLabels = false,
  redirectPath = "/thank-you",
}: LeadFormProps) {
  const INPUT_STYLES =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-6 text-base font-semibold text-ink placeholder:text-slate-700 placeholder:font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.25)] outline-none focus-visible:ring-2 focus-visible:ring-pine/30";

  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceError, setServiceError] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const labelTone = whiteLabels ? "text-white" : undefined;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedServices.length === 0) {
      setServiceError(true);
      return;
    }

    setServiceError(false);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const payload = {
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address1: formData.get("address") as string,
      city: formData.get("city") as string,
      postal_code: formData.get("zip") as string,
      lead_source: formData.get("referralSource") as string,
      select_services: selectedServices.join(", "),
    };

    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      router.push(redirectPath);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
    }
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
          <div className="space-y-1.5">
            <Label htmlFor="firstName" className={cn("text-base font-semibold text-ink", labelTone)}>
              First Name <span className={labelTone ? "text-white" : "text-pine"}>*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
              className={INPUT_STYLES}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lastName" className={cn("text-base font-semibold text-ink", labelTone)}>
              Last Name <span className={labelTone ? "text-white" : "text-pine"}>*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
              className={INPUT_STYLES}
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="phone" className={cn("text-base font-semibold text-ink", labelTone)}>
              Phone <span className={labelTone ? "text-white" : "text-pine"}>*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              required
              className={INPUT_STYLES}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className={cn("text-base font-semibold text-ink", labelTone)}>
              Email <span className={labelTone ? "text-white" : "text-pine"}>*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className={INPUT_STYLES}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="address" className={cn("text-base font-semibold text-ink", labelTone)}>
            Address <span className={labelTone ? "text-white" : "text-pine"}>*</span>
          </Label>
          <Input
            id="address"
            name="address"
            placeholder="Address"
            required
            className={INPUT_STYLES}
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="city" className={cn("text-base font-semibold text-ink", labelTone)}>
              City <span className={labelTone ? "text-white" : "text-pine"}>*</span>
            </Label>
            <Input
              id="city"
              name="city"
              placeholder="City"
              required
              className={INPUT_STYLES}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="zip" className={cn("text-base font-semibold text-ink", labelTone)}>
              Zip <span className={labelTone ? "text-white" : "text-pine"}>*</span>
            </Label>
            <Input
              id="zip"
              name="zip"
              placeholder="Zip"
              required
              className={INPUT_STYLES}
            />
          </div>
        </div>

        <Field
          label="Select Services"
          required
          labelClassName={labelTone}
        >
          <div className="space-y-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            {services.map((service) => {
              const active = selectedServices.includes(service);
              const inputId = `service-${service
                .toLowerCase()
                .replace(/[^a-z0-9]+/gi, "-")
                .replace(/^-+|-+$/g, "")}`;
              return (
                <label
                  key={service}
                  htmlFor={inputId}
                  className={cn(
                    "flex items-start gap-3 rounded-xl px-3 py-2 text-base text-left transition hover:bg-slate-50",
                    active ? "bg-slate-100 font-semibold text-pine" : "text-ink"
                  )}
                >
                  <input
                    id={inputId}
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={active}
                    onChange={(event) => {
                      const checked = event.target.checked;
                      setSelectedServices((prev) =>
                        checked ? [...prev, service] : prev.filter((item) => item !== service)
                      );
                      setServiceError(false);
                    }}
                    className="size-5 shrink-0 mt-0.5 rounded border-slate-300 text-pine focus:ring-2 focus:ring-pine/40"
                  />
                  <span className="text-left">{service}</span>
                </label>
              );
            })}
          </div>
          {serviceError && (
            <p className="text-sm font-semibold text-red-500">
              Please select at least one service.
            </p>
          )}
        </Field>

        <Field
          label="How Did You Find Us?"
          htmlFor="referralSource"
          labelClassName={labelTone}
        >
          <div className="relative">
            <select
              id="referralSource"
              name="referralSource"
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-10 text-base font-medium text-ink outline-none shadow-[0_1px_3px_rgba(0,0,0,0.25)] focus-visible:ring-2 focus-visible:ring-pine/30"
            >
              <option value="">Select one</option>
              {REFERRAL_SOURCES.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
              <svg className="size-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </Field>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full rounded-2xl border-0 px-4 py-7 text-lg font-bold uppercase tracking-wide text-white outline-none transition-all duration-300 ease-out hover:scale-105 hover:brightness-110 focus-visible:ring-2 disabled:opacity-50 md:text-xl",
            whiteLabels
              ? "bg-[#45D1B7] shadow-[0_0_15px_rgba(69,209,183,0.25),0_4px_12px_rgba(0,0,0,0.12)] focus-visible:ring-mint/30"
              : "bg-[#0B3352] shadow-[0_4px_12px_rgba(0,0,0,0.15)] focus-visible:ring-pine/30 hover:bg-[#0d4168]"
          )}
          style={whiteLabels ? { textShadow: "0 0 8px rgba(0,0,0,0.35)" } : undefined}
        >
          {isSubmitting ? "Sending..." : "Request My Quote"}
        </Button>
      </form>
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
      <Label
        htmlFor={htmlFor}
        className={cn("text-base font-semibold text-ink", labelClassName)}
      >
        {label} {required && <span className={labelClassName ? "text-white" : "text-pine"}>*</span>}
      </Label>
      {children}
    </div>
  );
}
