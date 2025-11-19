import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BRAND_MINT = "#00d9c0";

export const GET_QUOTE_BUTTON_CLASSNAME =
  "rounded-full px-8 py-5 text-lg font-semibold uppercase tracking-wide text-white shadow-brand transition hover:opacity-90";

export const GET_QUOTE_BUTTON_STYLE = { backgroundColor: BRAND_MINT } as const;

export function formatGetQuoteLabel(label?: string) {
  if (!label) return "GET YOUR QUOTE";
  return label.trim().toLowerCase() === "get your quote"
    ? "GET YOUR QUOTE"
    : label;
}
