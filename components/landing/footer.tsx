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

      <footer className="w-full py-12 border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Image src="/assets/logos/audora-square-logo.png" alt="Audora" width={32} height={32} className="h-8 w-auto" />
          </div>
          <div className="font-sans text-sm text-slate-500">
            © 2026 Audora. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {/* <Link href="#" className="font-sans text-sm text-slate-500 hover:text-primary hover:-translate-y-0.5 transition-transform duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="font-sans text-sm text-slate-500 hover:text-primary hover:-translate-y-0.5 transition-transform duration-200">
              Terms of Service
            </Link> */}
            <Link href="https://www.instagram.com/useaudora/" target="_blank" className="font-sans text-sm text-slate-500 hover:text-primary hover:-translate-y-0.5 transition-transform duration-200">
              Instagram
            </Link>
            {/* <Link href="#" className="font-sans text-sm text-slate-500 hover:text-primary hover:-translate-y-0.5 transition-transform duration-200">
              Discord
            </Link>
            <Link href="#" className="font-sans text-sm text-slate-500 hover:text-primary hover:-translate-y-0.5 transition-transform duration-200">
              Contact
            </Link> */}
          </div>
        </div>
      </footer>
    </>
  );
}
