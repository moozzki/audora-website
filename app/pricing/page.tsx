import { LandingLayout } from "@/components/landing/landing-layout";
import { PricingTable } from "@/components/landing/pricing-table";

export default function PricingPage() {
  return (
    <LandingLayout>
      <main className="flex-1 overflow-x-hidden pt-40 pb-20">
        <PricingTable />
      </main>
    </LandingLayout>
  );
}
