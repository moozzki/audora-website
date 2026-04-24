import { LandingLayout, AboutContent } from "@/components/landing";
import { CTAPrimary } from "@/components/landing/cta-primary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <LandingLayout>
      <main className="flex-1 overflow-x-hidden pt-40">
        <AboutContent />
        <CTAPrimary />
      </main>
    </LandingLayout>
  );
}
