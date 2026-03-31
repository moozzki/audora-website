"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenWaitlist?: () => void;
}

export function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-[921px] flex flex-col items-center justify-center px-6 pt-32 md:pt-40 pb-20 overflow-hidden hero-gradient">
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
          Transform text prompts into high-fidelity 3D assets. Audora combines advanced neural rendering with a sleek studio workflow.
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
            Join for free. No need credit card required.
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-xs font-sans text-outline/60 mb-16"
        >
          Join other creators waiting for early access.
        </motion.p>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto opacity-80">
          {[
            { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbi3I0vtI3QjcKRAIkyMJr0n9JEwa_Ypv2x_jiczqzht-BHpi8fKRS3Db_tTE8njFxu2k5otWYqYGPN-CPVKfpkhJ5ZSX2tVYH7CXLm9rYGTUyK180mWClQVsrfiI68_MriHSusa28WZj-QPIKFOBScNj9Cx8mLfjChgECcbIaZCoRO0Xir_8YB_5Y-EYmubNo-NceECQAuVxUlXEwVvZsuO6T3pImjgfeUirmKgt3oo0RUrjSy7ZvnyodckzBvHLoZdh3QlD6sg1m", delay: 0.5 },
            { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1QNQo4HLrZD3ZHsEzXFfM9VrUr3STAXl4mA2BuNYfmb5DFhtn1SNyUPjaysNQ_vy7dqxtVw0O1zk52EBG7hdMsfp6MJNPGJGwGcf-tlOgXNfqy2dmc8EZl20jG9hTgRQ-Fmu0JxXqJXK-KjqvqhMoURGw3w0ElV1GYYkVRxXtNNXR0SNXQhrrIaZaINkdxO8q-2X7qishrxpQtSESYWu2kAaHW9aF-RXkB_ShnB04YDCw9A2L6J2PHR0OVygZkq1fS-r-ibKJnNAl", mt: true, delay: 0.6 },
            { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHexTojLD2ygmEtEVG5JcK_m22KAAKirEo6oY3y8DQBZrTvtZX18-nu1CXbwcx9HOiWw0Nf_LtxUmBkHX_ez2ph2C4vz6EJ1v3QGZ42awBgqZPF3SbsIHvgoCbwfTu2fE0bmiMWWqF2yAqlcLEV4_k6UlwB-5z-oc_hYp013-wSJaj2dU6gAjNmwIiBE0rhskynJ5QjCh_P6zKeOo7fE8HffyfnwMwjeuC8viMiVl7yTBnrNhEgJOr6xZnQP84i__cRGGWTgabFreY", delay: 0.7 },
            { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ_qy69q7ZG1YvihmEYTU-UppzgIj8lYEZEvkYJzZK77NtmUa6THxiI9aWYCQetOKjuXgyeZ6U11a-KH9CJa55sL13ClFUUiwfAgkTOPntcuw_sjSV2fvFoVqhnMTQDpAgRslrnaHqS2BnIssd81Nbsvr3hdrksigu2bl39bshwsjL8-ik99SZwIGgi_9XhUr1KmINSemtbxtT-wYHpPih7FDtgpfFly0hKFfYHb31mSOn7Z-GDtoOfkT4-B4zWS9moWBHvl2OqqwC", mt: true, delay: 0.8 }
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: img.delay, duration: 0.8 }}
              className={`aspect-square rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center p-4 ${img.mt ? 'md:mt-8' : ''}`}
            >
              <img className="w-full h-full object-contain rounded-full" src={img.src} alt="3D icon preview" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
