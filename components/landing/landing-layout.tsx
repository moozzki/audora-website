"use client";

import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { RecentSalesPopup } from "./recent-sales-popup";
import { WaitlistProvider, useWaitlist } from "./waitlist-context";

function LandingContent({
  children,
  showRecentSales,
}: {
  children: React.ReactNode;
  showRecentSales: boolean;
}) {
  const { openWaitlist } = useWaitlist();

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      <Navbar onOpenWaitlist={openWaitlist} />
      {children}
      <Footer />
      {showRecentSales ? <RecentSalesPopup /> : null}
    </div>
  );
}

export function LandingLayout({
  children,
  showRecentSales = false,
}: {
  children: React.ReactNode;
  showRecentSales?: boolean;
}) {
  return (
    <WaitlistProvider>
      <LandingContent showRecentSales={showRecentSales}>{children}</LandingContent>
    </WaitlistProvider>
  );
}
