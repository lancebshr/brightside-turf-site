import Link from "next/link";
import { SiteFooter } from "@/components/ui/site-footer";
import { NAV_LINKS } from "@/lib/nav-links";

const POLICY_SECTIONS = [
  {
    title: "1. Overview",
    body: [
      "Brightside (“we,” “our,” or “us”) respects your privacy and is committed to protecting the information you share with us. This policy explains how we collect, use, and safeguard your personal information when you visit our website, request a quote, or use our services.",
      "By using our website or services, you agree to the terms of this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "Information you provide directly: When you fill out a quote form, contact us, or make a payment, we may collect your name, address, phone number, email, and payment details.",
      "Automatic information: When you visit our website, basic technical data (like browser type, device, and general location) may be collected automatically through cookies or analytics tools.",
      "Communication history: We keep records of emails, texts, and service notes to ensure consistent service and accurate follow-up.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "Provide and manage your services.",
      "Schedule appointments and communicate updates.",
      "Send invoices and process payments securely.",
      "Respond to questions, feedback, or service requests.",
      "Share reminders, seasonal tips, or service promotions that may interest you (you can unsubscribe at any time).",
      "Improve our website and customer experience.",
      "We never sell or rent your personal information to anyone.",
    ],
  },
  {
    title: "4. Payment Information",
    body: [
      "Payments are processed through trusted third-party providers that meet high security standards (such as PCI compliance). We never store your full credit card information on our systems.",
    ],
  },
  {
    title: "5. Cookies and Analytics",
    body: [
      "Our website uses cookies and analytics tools (like Google Analytics) to understand how visitors use our site. This helps us improve content, design, and functionality. You can adjust your browser settings to refuse cookies if you prefer.",
    ],
  },
  {
    title: "6. How We Protect Your Information",
    body: [
      "We use industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. Only authorized Brightside employees and trusted service partners have access to customer data, and only as needed to perform their jobs.",
    ],
  },
  {
    title: "7. Your Choices and Rights",
    body: [
      "Request a copy of the information we have about you.",
      "Ask us to correct or delete your information.",
      "Unsubscribe from marketing emails or texts at any time.",
      "To make any of these requests, contact us at office@brightsideturfne.com or through our website contact form.",
    ],
  },
  {
    title: "8. Information Sharing",
    body: [
      "We only share your information when necessary to deliver your service — for example, with trusted vendors who help us process payments, schedule routes, or send updates. These partners are required to protect your data and may not use it for any other purpose.",
    ],
  },
  {
    title: "9. Links to Other Websites",
    body: [
      "Our website may contain links to third-party sites (such as payment processors or review platforms). We are not responsible for the privacy practices or content of those sites and encourage you to review their policies.",
    ],
  },
  {
    title: "10. Updates to This Policy",
    body: [
      "We may update this policy from time to time to reflect new services, technology, or legal requirements. The latest version will always be posted here with the updated effective date.",
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your data, please reach out:",
      "office@brightsideturfne.com",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-0">
        <header className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pine/70">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-bold text-pine">
            How Brightside protects your information
          </h1>
          <p className="text-lg text-ink/70">
            We care about your trust. This page explains what we collect, how we
            use it, and the choices you‘ve got.
          </p>
        </header>

        <div className="space-y-8 rounded-[2.5rem] bg-white p-8 shadow-brand">
          {POLICY_SECTIONS.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-5xl font-bold text-pine">{section.title}</h2>
              <div className="space-y-3 text-base text-ink/80">
                {section.body.map((paragraph, idx) => (
                  <p key={`${section.title}-${idx}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center text-sm text-ink/60">
          <p>
            Need something else?{" "}
            <Link href="/get-quote" className="text-pine underline-offset-4 hover:underline">
              Get in touch with the Brightside team
            </Link>
            .
          </p>
        </div>
      </main>
      <SiteFooter
        links={[
          ...NAV_LINKS,
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Get Quote", href: "/get-quote" },
        ]}
      />
    </div>
  );
}
