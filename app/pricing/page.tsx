import type { Metadata } from "next";
import { headers } from "next/headers";
import { LandingLayout } from "@/components/landing/landing-layout";
import { PricingIDR } from "@/components/landing/pricing-idr";
import { PricingUSD } from "@/components/landing/pricing-usd";

export const metadata: Metadata = {
  title: "Pricing",

  description: "Pay as you go. No strings attached. Buy credits once and generate stunning 3D isometric icons anytime. Your credits never expire. Start creating today.",

  openGraph: {
    title: "Pricing",
    description: "Pay as you go. No strings attached. Buy credits once and generate stunning 3D isometric icons anytime. Your credits never expire. Start creating today.",
    url: "https://useaudora.com/pricing",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pricing",
    description: "Pay as you go. No strings attached. Buy credits once and generate stunning 3D isometric icons anytime. Your credits never expire. Start creating today.",
  },
};

export default async function PricingPage() {
  const headersList = await headers();
  // Falls back to "ID" on localhost (header is absent in local dev)
  const country = headersList.get("x-vercel-ip-country") ?? "ID";

  return (
    <LandingLayout>
      <main className="flex-1 overflow-x-hidden pt-40 pb-20">
        {country === "ID" ? <PricingIDR /> : <PricingUSD />}
      </main>
    </LandingLayout>
  );
}
