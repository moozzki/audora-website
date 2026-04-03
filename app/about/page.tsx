import { LandingLayout } from "@/components/landing/landing-layout";
import { AboutContent } from "@/components/landing/about-content";
import { CTAWaitlist } from "@/components/landing/cta-waitlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <LandingLayout>
      <main className="flex-1 overflow-x-hidden pt-40">
        <AboutContent />
        <CTAWaitlist />
      </main>
    </LandingLayout>
  );
}
