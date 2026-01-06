import { NextResponse } from "next/server";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/NC7jNFN6poW5MEcjBnjA/webhook-trigger/e3e3cd92-0d65-42a5-85f4-a0e81f1d88a2";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error("GHL webhook error:", response.status, await response.text());
      return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
