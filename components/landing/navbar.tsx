"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm shadow-blue-500/5"
    >
      <nav className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white font-heading">
            Audora
          </Link>
          <div className="hidden md:flex items-center gap-8 font-heading font-medium text-sm tracking-tight">
            <Link href="/pricing" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:opacity-80 transition-all duration-300">
              Pricing
            </Link>
            <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:opacity-80 transition-all duration-300">
              About
            </Link>
            <Link href="/blogs" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:opacity-80 transition-all duration-300">
              Blogs
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:opacity-80 transition-all duration-300">
            Sign In
          </Link>
          <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-full text-sm font-semibold scale-95 active:scale-90 transition-transform">
            Try for Free
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
