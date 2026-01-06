"use client";

import { useEffect } from "react";

type GHLFormProps = {
  formId?: string;
  height?: number;
};

export function GHLForm({
  formId = "Uu0yLSspeZuBWtyJqsKz",
  height = 947
}: GHLFormProps) {
  useEffect(() => {
    // Load the GHL form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "12px" }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Lead Form"
        data-height={height}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title="Lead Form"
      />
    </div>
  );
}
