"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { CarouselIcon } from "@/components/landing/carousel-icon";

interface HeroProps {
  onOpenWaitlist?: () => void;
}

export function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-[700px] flex flex-col items-center justify-center px-6 pt-24 md:pt-32 pb-10 overflow-hidden">
      <div className="max-w-4xl text-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block py-1 px-3 mb-6 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-sans font-bold tracking-widest uppercase"
        >
          🚀 We&apos;re Launching Soon
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-bold text-on-surface tracking-tighter mb-8 leading-[1.1]"
        >
          Create 3D Icons <br /><span className="text-primary">in Seconds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto mb-12"
        >
          Audora helps designers and developers generate beautiful 3D icons instantly just by typing. Get perfect assets for your next project without the friction.
        </motion.p>

        {/* Primary CTA — Join Beta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          <button
            id="hero-join-beta"
            onClick={onOpenWaitlist}
            className="group relative inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-heading font-bold text-base transition-all duration-300 shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-100"
          >
            <Sparkles className="w-5 h-5" />
            Get Early Access
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <span className="text-sm font-sans text-outline">
            No credit card required.
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-xs font-sans text-outline/60 mb-8"
        >
          Join other creators waiting for early access.
        </motion.p>

        {/* 3D Icons Carousel Preview */}
      </div>

      <div className="w-full relative z-10 mt-4 md:mt-8">
        <CarouselIcon />
      </div>
    </section>
  );
}
