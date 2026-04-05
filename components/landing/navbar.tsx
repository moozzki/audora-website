"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

interface NavbarProps {
  onOpenWaitlist?: () => void;
}

export function Navbar({ onOpenWaitlist }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <nav className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <Image src="/assets/logos/audora-square-logo.png" alt="Audora" width={32} height={32} className="h-8 w-auto" />
            </Link>
            <div className="hidden md:flex items-center gap-8 font-heading font-medium text-sm tracking-tight">
              {/* <Link href="/pricing" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:opacity-80 transition-all duration-300">
                Pricing
              </Link> */}
              <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:opacity-80 transition-all duration-300">
                Why Audora?
              </Link>
              {/* <Link href="/blogs" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:opacity-80 transition-all duration-300">
                Blogs
              </Link> */}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            {/* <Link href="/sign-in" className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:opacity-80 transition-all duration-300">
              Sign In
            </Link> */}
            <button
              onClick={onOpenWaitlist}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold scale-95 active:scale-90 transition-all duration-200 shadow-md shadow-primary/20"
            >
              Join Beta
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <button
              className="p-2 text-slate-600 dark:text-slate-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            <div className="flex flex-col p-6 space-y-6">
              <nav className="flex flex-col space-y-4 font-heading font-medium text-xl text-slate-900 dark:text-white">
                {/* <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Pricing</Link> */}
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Why Audora?</Link>
                {/* <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors">Blogs</Link> */}
              </nav>
              <div className="flex flex-col space-y-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                {/* <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 dark:text-slate-400 font-medium text-center hover:text-slate-900 transition-colors py-2">
                  Sign In
                </Link> */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenWaitlist?.();
                  }}
                  className="bg-primary hover:bg-primary/90 text-white w-full py-4 rounded-full font-semibold shadow-lg shadow-primary/20"
                >
                  Join Beta
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
