"use client";

import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { WaitlistProvider, useWaitlist } from "./waitlist-context";

function LandingContent({ children }: { children: React.ReactNode }) {
  const { openWaitlist } = useWaitlist();

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      <Navbar onOpenWaitlist={openWaitlist} />
      {children}
      <Footer />
    </div>
  );
}

export function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <WaitlistProvider>
      <LandingContent>{children}</LandingContent>
    </WaitlistProvider>
  );
}
