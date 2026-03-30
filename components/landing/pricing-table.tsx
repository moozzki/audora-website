"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Zap, Award, Gauge, Star, ChevronDown, CheckCircle2 } from "lucide-react";

export function PricingTable() {
  const [currency, setCurrency] = useState<"IDR" | "USD">("IDR");

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Hero Section */}
      <section className="text-center mb-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold font-headline tracking-wider mb-8"
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
          {[
            { icon: CheckCircle2, text: "Credits Never Expire" },
            { icon: ShieldCheck, text: "Full Commercial License" },
            { icon: Award, text: "30-Day Money-Back" },
            { icon: Gauge, text: "Instant 3D Delivery" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-on-surface-variant text-center">
              <item.icon className="w-5 h-5 text-primary shrink-0" />
              {item.text}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Currency Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center mb-16"
      >
        <div className="inline-flex p-1 bg-surface-container-low rounded-full relative">
          <button
            onClick={() => setCurrency("IDR")}
            className={`relative z-10 flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm transition-all ${currency === "IDR" ? "text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface font-medium"
              }`}
          >
            {currency === "IDR" && (
              <motion.div layoutId="currency-active" className="absolute inset-0 bg-surface-container-lowest shadow-sm rounded-full -z-10" />
            )}
            <span>🇮🇩</span> IDR
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className={`relative z-10 flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm transition-all ${currency === "USD" ? "text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface font-medium"
              }`}
          >
            {currency === "USD" && (
              <motion.div layoutId="currency-active" className="absolute inset-0 bg-surface-container-lowest shadow-sm rounded-full -z-10" />
            )}
            <span>🇺🇸</span> USD
          </button>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch lg:items-end mb-24 cursor-default">
        {/* Starter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 lg:p-10 rounded-2xl bg-surface-container-low flex flex-col h-full border border-transparent hover:bg-surface-container-high transition-colors group"
        >
          <div className="mb-8">
            <span className="text-3xl mb-4 block">🥉</span>
            <h3 className="font-headline font-bold text-2xl mb-2">Starter</h3>
            <p className="text-on-surface-variant text-sm">Perfect for hobbyists and single projects.</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-headline font-bold">10</span>
              <span className="text-on-surface-variant font-medium">Credits</span>
            </div>
            <div className="text-2xl font-bold text-on-surface">
              {currency === "IDR" ? "Rp 30.000" : "$2.00"}
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {["Text-to-3D Icon Generation", "High-Resolution Export", "Standard Commercial License"].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <Check className="w-5 h-5 text-outline" />
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl bg-surface-container-highest text-on-surface font-bold font-headline tracking-tight hover:bg-outline-variant/30 transition-all">
            Buy 10 Credits
          </button>
        </motion.div>

        {/* Creator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-8 lg:p-10 rounded-2xl bg-surface-container-lowest shadow-[0_12px_40px_rgba(26,28,28,0.06)] flex flex-col h-full relative mt-4 md:mt-0 border-t-4 border-primary-container z-10 lg:scale-105"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
            🔥 MOST POPULAR
          </div>
          <div className="mb-8">
            <div className="flex justify-between items-start">
              <span className="text-3xl mb-4 block">🥈</span>
              <div className="bg-secondary-fixed text-on-secondary-fixed text-[10px] px-2 py-1 rounded font-bold">SAVE 20%</div>
            </div>
            <h3 className="font-headline font-bold text-2xl mb-2">Creator</h3>
            <p className="text-on-surface-variant text-sm">Our most popular choice for professionals.</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-headline font-bold">50</span>
              <span className="text-on-surface-variant font-medium">Credits</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-on-surface">{currency === "IDR" ? "Rp 120.000" : "$8.00"}</span>
              <span className="text-on-surface-variant line-through text-sm opacity-50">{currency === "IDR" ? "Rp 150.000" : "$10.00"}</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm font-semibold">
              <Star className="w-5 h-5 text-primary fill-current" />
              Everything in Starter, plus:
            </li>
            {["Priority Generation Speed", "Prompt History & Variations", "24/7 Email Support"].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <Check className="w-5 h-5 text-primary" />
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold font-headline tracking-tight hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            Get 50 Credits
          </button>
        </motion.div>

        {/* Studio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-8 lg:p-10 rounded-2xl bg-surface-container-low flex flex-col h-full border border-transparent hover:bg-surface-container-high transition-colors group md:col-span-2 lg:col-span-1"
        >
          <div className="mb-8">
            <div className="flex justify-between items-start">
              <span className="text-3xl mb-4 block">🥇</span>
              <div className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] px-2 py-1 rounded font-bold">💎 BEST VALUE</div>
            </div>
            <h3 className="font-headline font-bold text-2xl mb-2">Studio</h3>
            <p className="text-on-surface-variant text-sm">Unlimited scale for teams and studios.</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-headline font-bold">120</span>
              <span className="text-on-surface-variant font-medium">Credits</span>
            </div>
            <div className="text-2xl font-bold text-on-surface">{currency === "IDR" ? "Rp 250.000" : "$18.00"}</div>
            <p className="text-[10px] text-primary font-bold mt-1 uppercase tracking-wider">100 + 20 FREE Credits</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm font-semibold">
              <Star className="w-5 h-5 text-outline fill-current" />
              Everything in Creator, plus:
            </li>
            {["Bulk Generation", "API Access (Beta)", "Extended Commercial License"].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <Check className="w-5 h-5 text-outline" />
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl bg-surface-container-highest text-on-surface font-bold font-headline tracking-tight hover:bg-outline-variant/30 transition-all">
            Claim 120 Credits
          </button>
        </motion.div>
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
            <p className="text-xs text-on-surface-variant">🔒 Secure checkout powered by Midtrans/Polar.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 opacity-60 hover:opacity-100 transition-opacity">
            {["QRIS", "BCA", "MANDIRI", "GOPAY", "OVO"].map(method => (
              <div key={method} className="text-xs font-black italic text-on-surface-variant tracking-tighter">{method}</div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Showcase Break */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="h-64 rounded-xl overflow-hidden bg-secondary-fixed group"
        >
          <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="minimalist 3D gear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZdheLkvmp6ol_SPwZmxLaPE7BSa3PsAacU6Zk4O9iT9afUCUr8Rf9SuiGbXSt_psUT5aeOwVqVUcXvGXZ5rmnSV7TFH4fiU7kCSNx2hc6yxrgCZ0fqw6QjWnn5Z8GA1f4VAIEz-CgOedZq3vfw5ZodT2MKNdeIpU2n0_WvnTOUAVv2I5YEtW37fl8UXIdO8kwDrm2BXDKX-L1hTW8TixqysaJ6YfMBU8_LpcUr9VFXryCIhEUtdfBPz1CbAkzGnhw2PbOHtMNoWes" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="h-64 rounded-xl overflow-hidden bg-primary-fixed mt-12 md:mt-24"
        >
          <img className="w-full h-full object-cover" alt="stylized 3D light bulb" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ0PvLPjsvrkMhWt2j2ub5TiGi92SI_xJkiUxIgt4oy1H7xBmhXsfRi2b7t5QjTbtgZ2PeLifEsXyovwr9YdShmPOrliCNdGUkvmRtAhNK6Ky9fzDLLFljmX3C6vnvNiQYUq8dfDmZCEIDvAW27cyipbH8ynJafdUN2if-XHNEFp6a3aShpfaOLNK-pWnKKynKXiE_ltGkDgWqIWicK1SqXxF9i4RhF-v7w18wJwVC78a59KG9ZQwRbh7cIXji8d3gLotfVt0C_gKE" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="h-64 rounded-xl overflow-hidden bg-tertiary-fixed"
        >
          <img className="w-full h-full object-cover" alt="abstract 3D smooth organic shape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAZF43LORexr3NOyIDKVqnQsccQ9FQ-yB_vndxdo72tSpULYW-SFdZaWydyRZnjo-T8CvEgd7IRWGneJp3xKlvsZ6PNurZ3n6N3Ob6JnkBrl-dsO3AWB7R8KqtYWg-9CvYaZuWWBbTY6IYetFwGPzOZ076fSiOB-4LDWQAPCpWDZNgPzQpACPotg6eNo1D3x-uwbN5y8HPVT9WRwm35q2ilVQFdYFh4qAMlA4BTqQLbP9NCoDbyve9RqKrmkxgVcvpPxEMfkj_A_Ei" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="h-64 rounded-xl overflow-hidden bg-surface-container-highest mt-12 md:mt-6"
        >
          <img className="w-full h-full object-cover" alt="3D rendered stylized paper plane" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHFAqnhsvpFnPQFLPMcDAFYx-OD4n8LNVuU4J02VYjPKWFZZsvet9rvJ2vz2n_PUhVvCAvPw12cCLBT5lPVACPmPbPE29Naj90pSSGhckNF-ytwm6dk9QfvCZpMN1UK0I9HJvDKtflAi5bPk7r_NfNDegA4rnzm5WKcpUL2ftIp9smH0cvfwQfK0ZjC52YXJiuMcCXBalK0yOxXHCYCtkjGzAkeebsItv5CL334vth83brGFnU9bIUsR1HSUWBucukVvxQQzLrtLug" />
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto mb-20 px-4 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-headline font-bold text-3xl md:text-4xl mb-8 md:mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {[
            { q: "Do my unused credits expire?", a: "Absolutely not. We believe you should own what you pay for. Your credits stay in your account forever until you decide to use them." },
            { q: "Can I use for clients?", a: "Yes, all icons come with commercial license. Whether you're building a website, app, or social media content for a client, you're covered." },
            { q: "How fast is the generation?", a: "Our cloud-based AI rendering engine is lightning fast. Icons are typically rendered and ready in under 10 seconds." },
          ].map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} idx={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

function FaqItem({ question, answer, idx }: { question: string, answer: string, idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * idx }}
      className="group bg-surface-container-low rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center cursor-pointer"
      >
        <span className="font-bold text-on-surface">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
