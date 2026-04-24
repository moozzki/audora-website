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
    q: "Can I use for clients?",
    a: "Yes, all icons come with commercial license. Whether you're building a website, app, or social media content for a client, you're covered.",
  },
  {
    q: "How fast is the generation?",
    a: "Our cloud-based AI rendering engine is lightning fast. Icons are typically rendered and ready in less than 50 seconds.",
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
