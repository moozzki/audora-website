"use client";

import { useState, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Turnstile } from "@marsidev/react-turnstile";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle, Loader2, AlertCircle, Sparkles } from "lucide-react";
import { joinWaitlist } from "@/app/actions/waitlist";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0); // used to reset widget

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

  const resetForm = useCallback(() => {
    setEmail("");
    setTurnstileToken(null);
    setFormState("idle");
    setErrorMessage("");
    setTurnstileKey((k) => k + 1);
  }, []);

  const handleOpenChange = (value: boolean) => {
    if (!value) resetForm();
    onOpenChange(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      setFormState("error");
      setErrorMessage("Just a sec, running a quick security check");
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    const result = await joinWaitlist(email, turnstileToken);

    if (result.success) {
      setFormState("success");
      setTimeout(() => {
        handleOpenChange(false);
      }, 3000);
    } else {
      setFormState("error");
      setErrorMessage(result.error);
      // Reset turnstile after error
      setTurnstileToken(null);
      setTurnstileKey((k) => k + 1);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-slate-900/20 backdrop-blur-md"
          />
        </Dialog.Overlay>

        {/* Modal */}
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-1/2 z-[110] w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4 outline-none"
          >
            <div className="relative rounded-3xl border border-outline-variant/30 bg-surface-container-lowest shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08),0_5px_15px_rgba(0,0,0,0.05)] overflow-hidden">
              {/* Top accent gradient */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Close button */}
              <Dialog.Close className="absolute right-5 top-5 z-10 p-1.5 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors">
                <X className="w-4 h-4" />
              </Dialog.Close>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    // ── Success State ──
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center text-center py-6 gap-4"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl" />
                        <div className="relative w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                          <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-on-surface mb-2">
                          You&apos;re on the list! 🎉
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          You&apos;re in! We&apos;ll reach out the second Audora goes live. Stay tuned.
                        </p>
                      </div>
                      <p className="text-outline text-xs">
                        Closing in 3 seconds...
                      </p>
                    </motion.div>
                  ) : (
                    // ── Form State ──
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/60 text-on-secondary-fixed text-xs font-bold mb-4">
                          <Sparkles className="w-3 h-3" />
                          Early Access
                        </div>
                        <Dialog.Title className="font-heading text-2xl font-bold text-on-surface tracking-tight mb-2">
                          Get an Early Access
                        </Dialog.Title>
                        <Dialog.Description className="text-on-surface-variant text-sm leading-relaxed">
                          Be the first to experience Audora. Join our beta today to secure your spot and get 2 free credits for your first 3D icons when we go live.
                        </Dialog.Description>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email input */}
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline pointer-events-none" />
                          <input
                            id="waitlist-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={formState === "loading"}
                            placeholder="nama@email.com"
                            className="w-full pl-11 pr-4 py-3.5 rounded-full border border-outline-variant/50 bg-surface-container text-on-surface placeholder:text-outline-variant text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 disabled:opacity-50"
                          />
                        </div>

                        {/* Error message */}
                        <AnimatePresence>
                          {formState === "error" && errorMessage && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 border border-red-500/20 px-3 py-2.5 rounded-lg"
                            >
                              <AlertCircle className="w-4 h-4 shrink-0" />
                              <span>{errorMessage}</span>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Cloudflare Turnstile — managed mode */}
                        <div className="flex justify-center">
                          <Turnstile
                            key={turnstileKey}
                            siteKey={siteKey}
                            onSuccess={(token) => setTurnstileToken(token)}
                            onError={() => {
                              setTurnstileToken(null);
                              setFormState("error");
                              setErrorMessage(
                                "Oops, the security check failed. Please refresh and try again."
                              );
                            }}
                            onExpire={() => {
                              setTurnstileToken(null);
                            }}
                            options={{
                              theme: "light",
                              size: "normal",
                            }}
                          />
                        </div>

                        {/* Submit button */}
                        <button
                          type="submit"
                          disabled={formState === "loading" || !turnstileToken}
                          className="w-full py-3.5 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-heading font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 active:scale-[0.98]"
                        >
                          {formState === "loading" ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Saving your spot...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4" />
                              Join Beta
                            </>
                          )}
                        </button>

                        <p className="text-center text-xs text-outline">
                          No spam. Just your exclusive invite and free credits.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
