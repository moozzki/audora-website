"use client";

import { LandingLayout } from "@/components/landing/landing-layout";
import { HeroPrimary } from "@/components/landing/hero-primary";
import { Features } from "@/components/landing/features";
import { InteractiveDemo } from "@/components/landing/interactive-demo";
import { Personas } from "@/components/landing/personas";
import { Testimonials } from "@/components/landing/testimonials";
import { CTAPrimary } from "@/components/landing/cta-primary";

function HomeContent() {
  return (
    <main className="flex-1 overflow-x-hidden pt-40">
      <HeroPrimary />
      <InteractiveDemo />
      <Features />
      <Personas />
      <Testimonials />
      <CTAPrimary />
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
