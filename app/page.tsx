"use client";

import { LandingLayout } from "@/components/landing/landing-layout";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { InteractiveDemo, Personas } from "@/components/landing/showcase";
import { useWaitlist } from "@/components/landing/waitlist-context";
import { CTAWaitlist } from "@/components/landing/cta-waitlist";

function HomeContent() {
  const { openWaitlist } = useWaitlist();

  return (
    <main className="flex-1 overflow-x-hidden">
      <Hero onOpenWaitlist={openWaitlist} />
      <InteractiveDemo />
      <Features />
      <Personas />
      <CTAWaitlist />
    </main>
  );
}

export default function Home() {
  return (
    <LandingLayout>
      <HomeContent />
    </LandingLayout>
  );
}
