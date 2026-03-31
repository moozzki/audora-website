"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useWaitlist } from "@/components/landing/waitlist-context";

export function CTAWaitlist() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-outline-variant/30">
      {/* Background with gradient and grid */}
      <div className="absolute inset-0 bg-surface-container-lowest" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest" />
      
      {/* Glow effects */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/10 text-on-surface border border-secondary-fixed/20 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            Limited Beta Access
          </div>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight mb-6">
            Ready to upgrade your design workflow?
          </h2>
          
          <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-10">
            We are putting the final touches on Audora. Secure your spot on the beta list today and claim your 2 free credits the moment we go live.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={openWaitlist}
              className="group relative inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-heading font-bold text-base transition-all duration-300 shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-100"
            >
              <Sparkles className="w-5 h-5" />
              Join Beta Now
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="text-sm text-outline font-medium">
              No credit card required. We will only email you when we launch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
