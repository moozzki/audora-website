"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Award, Gauge, CheckCircle2 } from "lucide-react";
import { CarouselIcon } from "./carousel-icon";
import { PricingFaq } from "./pricing-faq";

const CHECKOUT_BASE = "https://app.useaudora.com/checkout";

interface Package {
  emoji: string;
  name: string;
  description: string;
  credits: number;
  price: string;
  originalPrice?: string;
  perCredit: string;
  packageId: string;
  ctaText: string;
  featured: boolean;
  bestValue?: boolean;
}

const packages: Package[] = [
  {
    emoji: "🥉",
    name: "Starter",
    description: "Perfect for hobbyists and single projects.",
    credits: 10,
    price: "Rp 30.000",
    perCredit: "Rp 3.000 / credit",
    packageId: "starter_idr",
    ctaText: "Buy 10 Credits",
    featured: false,
  },
  {
    emoji: "🥈",
    name: "Creator",
    description: "Our most popular choice for professionals.",
    credits: 30,
    price: "Rp 75.000",
    originalPrice: "Rp 90.000",
    perCredit: "Rp 2.500 / credit",
    packageId: "creator_idr",
    ctaText: "Get 30 Credits",
    featured: true,
  },
  {
    emoji: "🥇",
    name: "Studio",
    description: "Unlimited scale for teams and studios.",
    credits: 75,
    price: "Rp 150.000",
    originalPrice: "Rp 225.000",
    perCredit: "Rp 2.000 / credit",
    packageId: "studio_idr",
    ctaText: "Claim 75 Credits",
    featured: false,
    bestValue: true,
  },
];

const features = [
  "Text-to-3D Icon Generation",
  "Image-to-3D Icon Generation",
  "Refine 3D Icon",
  "High-Resolution Export (2K & 4K)",
  "Full Commercial License",
];

const trustSignals = [
  { icon: CheckCircle2, text: "Credits Never Expire" },
  { icon: ShieldCheck, text: "Full Commercial License" },
  { icon: Award, text: "30-Day Money-Back" },
  { icon: Gauge, text: "Instant 3D Delivery" },
];

const paymentMethods = ["QRIS", "BRI", "MANDIRI", "BNI", "GOPAY", "SHOPEEPAY"];

export function PricingIDR() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Hero Section */}
      <section className="text-center mb-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold font-sans tracking-widest uppercase mb-8"
        >
          <Zap className="w-4 h-4 fill-current" />
          Simple Credit-Based Pricing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl tracking-tighter text-on-surface mb-6 leading-[1.05] md:leading-[0.95]"
        >
          Pay As You Go.<br />
          <span className="text-primary-container">No Strings Attached.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Stop paying for unused subscriptions. Buy credits once, generate stunning 3D icons anytime. Your credits never expire.
        </motion.p>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-6 md:py-8 border-y border-outline-variant/15"
        >
          {trustSignals.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-on-surface-variant text-center">
              <item.icon className="w-5 h-5 text-primary shrink-0" />
              {item.text}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch lg:items-end mb-24 cursor-default">
        {packages.map((pkg, i) => (
          pkg.featured ? (
            /* Creator — featured card */
            <motion.div
              key={pkg.packageId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 2) }}
              className="p-8 lg:p-10 rounded-2xl bg-surface-container-lowest shadow-[0_12px_40px_rgba(26,28,28,0.06)] flex flex-col h-full relative mt-4 md:mt-0 border-t-4 border-primary-container z-10 lg:scale-105"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                🔥 MOST POPULAR
              </div>
              <div className="mb-8">
                <span className="text-3xl mb-4 block">{pkg.emoji}</span>
                <h3 className="font-headline font-bold text-2xl mb-2">{pkg.name}</h3>
                <p className="text-on-surface-variant text-sm">{pkg.description}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-headline font-bold">{pkg.credits}</span>
                  <span className="text-on-surface-variant font-medium">Credits</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <div className="text-2xl font-bold text-on-surface">{pkg.price}</div>
                  {pkg.originalPrice && (
                    <div className="flex items-center gap-1.5 ml-1">
                      <span className="text-base font-bold text-on-surface-variant/70 line-through decoration-red-500 dark:decoration-red-400 decoration-[2px]">
                        {pkg.originalPrice}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-500/20 px-1.5 py-0.5 rounded-sm">
                        SAVE
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium text-primary mt-1">{pkg.perCredit}</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`${CHECKOUT_BASE}?package=${pkg.packageId}`}
                className="w-full py-4 rounded-full bg-primary text-white font-bold font-headline tracking-tight hover:opacity-90 transition-all shadow-lg shadow-primary/20 text-center block"
              >
                {pkg.ctaText}
              </a>
            </motion.div>
          ) : (
            /* Starter & Studio — standard cards */
            <motion.div
              key={pkg.packageId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 2) }}
              className={`p-8 lg:p-10 rounded-2xl bg-surface-container-low flex flex-col h-full border border-transparent hover:bg-surface-container-high transition-colors group${pkg.bestValue ? " md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="mb-8">
                {pkg.bestValue ? (
                  <div className="flex justify-between items-start">
                    <span className="text-3xl mb-4 block">{pkg.emoji}</span>
                    <div className="bg-primary-container text-white text-[10px] px-2 py-1 rounded font-bold">💎 BEST VALUE</div>
                  </div>
                ) : (
                  <span className="text-3xl mb-4 block">{pkg.emoji}</span>
                )}
                <h3 className="font-headline font-bold text-2xl mb-2">{pkg.name}</h3>
                <p className="text-on-surface-variant text-sm">{pkg.description}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-headline font-bold">{pkg.credits}</span>
                  <span className="text-on-surface-variant font-medium">Credits</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <div className="text-2xl font-bold text-on-surface">{pkg.price}</div>
                  {pkg.originalPrice && (
                    <div className="flex items-center gap-1.5 ml-1">
                      <span className="text-base font-bold text-on-surface-variant/70 line-through decoration-red-500 dark:decoration-red-400 decoration-[2px]">
                        {pkg.originalPrice}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-500/20 px-1.5 py-0.5 rounded-sm">
                        SAVE
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium text-primary mt-1">{pkg.perCredit}</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-outline" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`${CHECKOUT_BASE}?package=${pkg.packageId}`}
                className="w-full py-4 rounded-full bg-surface-container-high text-on-surface font-bold font-headline tracking-tight hover:bg-outline-variant/30 transition-all text-center block"
              >
                {pkg.ctaText}
              </a>
            </motion.div>
          )
        ))}
      </section>

      {/* Payment Bar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mb-32"
      >
        <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant/10">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <p className="text-sm font-bold text-on-surface tracking-tight">Accepted Payment Methods</p>
            <p className="text-xs text-on-surface-variant">🔒 Secure checkout powered by Pakasir.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 opacity-60 hover:opacity-100 transition-opacity">
            {paymentMethods.map((method) => (
              <div key={method} className="text-xs font-black italic text-on-surface-variant tracking-tighter">{method}</div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Showcase */}
      <section className="mb-32 max-w-[1440px] mx-auto overflow-hidden">
        <CarouselIcon />
      </section>

      {/* FAQ */}
      <PricingFaq />
    </div>
  );
}
