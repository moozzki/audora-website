"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do my unused credits expire?",
    a: "Absolutely not. We believe you should own what you pay for. Your credits stay in your account forever until you decide to use them.",
  },
  {
    q: "What happens if I run out of credits?",
    a: "Once you're out of credits, you won't be able to generate new icons. You can easily top up your credits by purchasing another package to keep creating. Your new credits will simply be added to your balance.",
  },
  {
    q: "How should I write prompts?",
    a: "Keep it simple and clear. Describe the main object, and then adjust the controls or styles to your liking. Short, focused prompts usually work best, for example: \"coffee cup\" or \"gamepad\". You can also browse the Spotlight inside the app to see prompts that work well and reuse them.",
  },
  {
    q: "What resolution and format are icons exported in?",
    a: "All generated 3D icons can be exported as high-resolution PNG files with transparent backgrounds, up to 2K and 4K resolution. Perfect for app icons, UI assets, or brand visuals.",
  },
  {
    q: "Can I use the icons for commercial work?",
    a: "Yes, all icons come with a full commercial license. You can use them in personal and commercial projects, including client work, apps, marketing materials, and websites.",
  },
  {
    q: "Will you add more styles in the future?",
    a: "Yes. We are constantly improving our AI rendering engine, and new visual styles and customization options will be added over time for all users.",
  },
  {
    q: "Do I need design or 3D experience?",
    a: "Not at all. Audora is designed with a low barrier to entry, so anyone can create professional-looking 3D assets. Just drop a reference image or type a text description of what you want, and our AI handles the complex 3D rendering.",
  },
  {
    q: "What payment methods are accepted?",
    a: "For Indonesian users: QRIS and Bank Virtual Accounts via Pakasir. For international users: Credit Cards, Apple Pay, Google Pay, and PayPal via Polar.",
  },
];

function FaqItem({ question, answer, idx }: { question: string; answer: string; idx: number }) {
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
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
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

export function PricingFaq() {
  return (
    <section className="max-w-3xl mx-auto mb-20 px-4 md:px-0">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-headline font-bold text-3xl md:text-4xl mb-8 md:mb-12 text-center"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FaqItem key={i} question={faq.q} answer={faq.a} idx={i} />
        ))}
      </div>
    </section>
  );
}
