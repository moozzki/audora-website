"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { authClient } from "@/lib/auth-client";
import { UserProfileDropdown } from "./user-profile-dropdown";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenWaitlist?: () => void;
}

const redirectToSignIn = () => {
  const url = process.env.NODE_ENV === "development"
    ? "http://localhost:3000/sign-in"
    : "https://app.useaudora.com/sign-in";
  window.location.href = url;
};

export function Navbar({}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0d0d0d]/80 backdrop-blur-xl shadow-sm shadow-blue-500/5"
      >
        <nav className="flex items-center h-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full font-heading">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center">
                <Image src="/assets/logos/audora-square-logo.png" alt="Audora" width={32} height={32} />
              </Link>
              <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-tight">
                <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:opacity-80 transition-all duration-300">
                  Why Audora?
                </Link>
                {/* <Link href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:opacity-80 transition-all duration-300">
                  Blog
                </Link> */}
                <Link href="/pricing" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:opacity-80 transition-all duration-300">
                  Pricing
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ModeToggle />
              {!isPending && (
                session ? (
                  <UserProfileDropdown user={session.user} />
                ) : (
                  <button
                    onClick={redirectToSignIn}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold scale-95 active:scale-90 transition-all duration-200 shadow-md shadow-primary/20"
                  >
                    Sign In
                  </button>
                )
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden items-center justify-between w-full gap-4">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/assets/logos/audora-square-logo.png" alt="Audora" width={28} height={28} />
            </Link>

            {/* Menu Button - Center (Logged In) or Right (Logged Out) */}
            <div className={cn(
              "flex items-center transition-all duration-500",
              session ? "flex-1 justify-center" : "flex-1 justify-end"
            )}>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 dark:bg-white/5 active:scale-[0.98] rounded-full transition-all duration-300 group",
                  session ? "w-full max-w-[180px]" : "w-[45%] max-w-[140px]"
                )}
              >
                <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {isMobileMenuOpen ? "Close" : "Menu"}
                </span>
                <ChevronDown className={cn("size-4 text-slate-500 dark:text-slate-400 transition-transform duration-300", isMobileMenuOpen ? "rotate-180" : "")} />
              </button>
            </div>

            {/* Right: User Profile (Only if session exists) */}
            {!isPending && session && (
              <div className="flex items-center justify-end shrink-0 min-w-[32px]">
                <UserProfileDropdown user={session.user} />
              </div>
            )}
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 bg-white dark:bg-[#0d0d0d] md:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-[calc(100vh-5rem)] p-6">
              <nav className="flex flex-col space-y-6 font-heading font-medium text-3xl text-slate-900 dark:text-white mt-8">
                {/* <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Pricing</Link> */}
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  Why Audora?
                </Link>
                {/* <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  Blog
                </Link> */}
                <Link
                  href="/pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  Pricing
                </Link>
              </nav>

              <div className="mt-auto space-y-6 pb-10">
                {!isPending && !session && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      redirectToSignIn();
                    }}
                    className="bg-primary hover:bg-primary/90 text-white w-full py-4 rounded-3xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
                  >
                    Sign In to Dashboard
                  </button>
                )}

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Appearance</span>
                    <span className="text-xs text-slate-500">Light or Dark mode</span>
                  </div>
                  <ModeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
