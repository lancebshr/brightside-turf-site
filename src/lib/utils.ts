import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BRAND_MINT = "#45D1B7";

export const GET_QUOTE_BUTTON_CLASSNAME =
  "rounded-full px-8 py-5 text-lg font-semibold uppercase tracking-wide text-white shadow-brand transition hover:opacity-90";

export const BOLD_PLUS_HEADING =
  "text-6xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]";

export const GET_QUOTE_BUTTON_STYLE = {
  backgroundColor: BRAND_MINT,
  textShadow: "0 0 8px rgba(0,0,0,0.35)",
} as const;

export function formatGetQuoteLabel(label?: string) {
  if (!label) return "GET YOUR QUOTE";
  return label.trim().toLowerCase() === "get your quote"
    ? "GET YOUR QUOTE"
    : label;
}
