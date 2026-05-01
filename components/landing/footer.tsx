"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <>
      {/* <section className="py-32 px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-slate-900 rounded-4xl p-12 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
              Ready to build your library?
            </h2>
            <p className="text-slate-400 font-sans text-lg mb-12 max-w-xl mx-auto">
              Every generation is automatically saved to your personal library, organized and ready whenever you need them.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="bg-primary hover:bg-primary-container text-white px-12 py-5 rounded-full font-heading font-bold text-xl transition-all hover:shadow-[0_0_40px_rgba(73,73,255,0.4)]">
                Start Creating Your First Icon
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-full font-heading font-bold text-xl backdrop-blur-md transition-colors">
                View Showcase
              </button>
            </div>
          </div>
        </motion.div>
      </section> */}

      <footer className="w-full py-16 border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-12">
          {/* Top Row: 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo */}
            <div className="flex flex-col gap-4">
              <Image src="/assets/logos/audora-square-logo.png" alt="Audora" width={40} height={40} />
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white">Company</h3>
              <div className="flex flex-col gap-3">
                <Link href="/about" className="font-sans text-sm text-slate-500 hover:text-primary transition-colors duration-200 w-fit">
                  Why Audora
                </Link>
                <Link href="/pricing" className="font-sans text-sm text-slate-500 hover:text-primary transition-colors duration-200 w-fit">
                  Pricing
                </Link>
                {/* <Link href="/blog" className="font-sans text-sm text-slate-500 hover:text-primary transition-colors duration-200 w-fit">
                  Blog
                </Link> */}
              </div>
            </div>

            {/* Column 3: Social */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white">Social</h3>
              <div className="flex flex-col gap-3">
                <Link href="https://www.instagram.com/useaudora/" target="_blank" className="font-sans text-sm text-slate-500 hover:text-primary transition-colors duration-200 w-fit">
                  Instagram
                </Link>
                <Link href="https://www.threads.com/@useaudora" target="_blank" className="font-sans text-sm text-slate-500 hover:text-primary transition-colors duration-200 w-fit">
                  Threads
                </Link>
              </div>
            </div>

            {/* Column 4: Legal */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white">Legal</h3>
              <div className="flex flex-col gap-3">
                <Link href="/terms-of-service" className="font-sans text-sm text-slate-500 hover:text-primary transition-colors duration-200 w-fit">
                  Terms of Service
                </Link>
                <Link href="/privacy-policy" className="font-sans text-sm text-slate-500 hover:text-primary transition-colors duration-200 w-fit">
                  Privacy Policy
                </Link>
                <Link href="/refund-policy" className="font-sans text-sm text-slate-500 hover:text-primary transition-colors duration-200 w-fit">
                  Refund Policy
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-center items-center">
            <div className="font-sans text-sm text-slate-500">
              © 2026 Audora. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
