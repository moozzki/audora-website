"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { WaitlistModal } from "./waitlist-modal";

interface WaitlistContextType {
  openWaitlist: () => void;
  closeWaitlist: () => void;
  isOpen: boolean;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openWaitlist = () => setIsOpen(true);
  const closeWaitlist = () => setIsOpen(false);

  return (
    <WaitlistContext.Provider value={{ openWaitlist, closeWaitlist, isOpen }}>
      <WaitlistModal open={isOpen} onOpenChange={setIsOpen} />
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (context === undefined) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}
