import type { Metadata } from "next";
import { LandingLayout } from "@/components/landing/landing-layout";
import { PricingTable } from "@/components/landing/pricing-table";

export const metadata: Metadata = {
  title: "Pricing | Audora",
  // Baris ini yang ngeblokir Google biar ga nge-index halamannya
  robots: {
    index: false,
    follow: false,
  },
};

export default function PricingPage() {
  return (
    <LandingLayout>
      <main className="flex-1 overflow-x-hidden pt-40 pb-20">
        <PricingTable />
      </main>
    </LandingLayout>
  );
}
