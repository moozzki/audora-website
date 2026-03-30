import { Navbar } from "@/components/landing/navbar";
import { PricingTable } from "@/components/landing/pricing-table";
import { Footer } from "@/components/landing/footer";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#1A1C1C]">
      <Navbar />
      <main className="flex-1 overflow-x-hidden pt-40 pb-20">
        <PricingTable />
      </main>
      <Footer />
    </div>
  );
}
