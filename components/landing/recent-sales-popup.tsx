"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "zupericon-recent-sales-dismissed";
const SHOWN_COUNT_KEY = "zupericon-recent-sales-count";
const MAX_NOTIFICATIONS = 3;
const INITIAL_DELAY = 10000;
const DISPLAY_DURATION = 7000;
const COOLDOWN = 28000;

type RecentSale = {
  id: string;
  customerLabel: string;
  packageName: string;
  credits: number;
  createdAt: string;
  isDemo: boolean;
};

function formatRelativeTime(createdAt: string) {
  const elapsed = Math.max(0, Date.now() - new Date(createdAt).getTime());
  const minutes = Math.floor(elapsed / (60 * 1000));

  if (minutes < 1) return "Just now";
  if (minutes === 1) return "1 minute ago";
  if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours === 1) return "1 hour ago";
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  return days === 1 ? "Yesterday" : `${days} days ago`;
}

function hasSessionDismissal() {
  if (typeof window === "undefined") return false;

  try {
    return Boolean(sessionStorage.getItem(STORAGE_KEY));
  } catch {
    return false;
  }
}

function getSessionShownCount() {
  if (typeof window === "undefined") return 0;

  try {
    const count = Number.parseInt(sessionStorage.getItem(SHOWN_COUNT_KEY) ?? "0", 10);
    return Number.isNaN(count) ? 0 : Math.min(count, MAX_NOTIFICATIONS);
  } catch {
    return 0;
  }
}

export function RecentSalesPopup() {
  const [sales, setSales] = useState<RecentSale[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shownCount, setShownCount] = useState(getSessionShownCount);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDismissed, setIsDismissed] = useState(hasSessionDismissal);
  const [hasStarted, setHasStarted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let isMounted = true;

    async function fetchRecentSales() {
      try {
        const response = await fetch("/api/transactions/recent", {
          cache: "no-store",
        });
        const data = await response.json();

        if (isMounted && data.success && Array.isArray(data.sales)) {
          setSales(data.sales);
        }
      } catch (error) {
        console.error("Error loading recent sales:", error);
      }
    }

    fetchRecentSales();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!sales.length || hasStarted || shownCount >= MAX_NOTIFICATIONS || isDismissed) return;

    const timer = window.setTimeout(() => {
      setHasStarted(true);
      setShownCount((count) => {
        const nextCount = Math.min(count + 1, MAX_NOTIFICATIONS);

        try {
          sessionStorage.setItem(SHOWN_COUNT_KEY, String(nextCount));
        } catch {
          // Storage can be unavailable in privacy-restricted browsers.
        }

        return nextCount;
      });
      setIsVisible(true);
    }, INITIAL_DELAY);

    return () => window.clearTimeout(timer);
  }, [hasStarted, isDismissed, sales.length, shownCount]);

  useEffect(() => {
    if (!isVisible || isPaused) return;

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, DISPLAY_DURATION);

    return () => window.clearTimeout(timer);
  }, [isPaused, isVisible]);

  useEffect(() => {
    if (
      !sales.length ||
      !hasStarted ||
      isVisible ||
      shownCount >= MAX_NOTIFICATIONS ||
      isDismissed
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCurrentIndex((index) => (index + 1) % sales.length);
      setShownCount((count) => {
        const nextCount = Math.min(count + 1, MAX_NOTIFICATIONS);

        try {
          sessionStorage.setItem(SHOWN_COUNT_KEY, String(nextCount));
        } catch {
          // Storage can be unavailable in privacy-restricted browsers.
        }

        return nextCount;
      });
      setIsVisible(true);
    }, COOLDOWN);

    return () => window.clearTimeout(timer);
  }, [hasStarted, isDismissed, isVisible, sales.length, shownCount]);

  function dismiss() {
    setIsVisible(false);
    setIsDismissed(true);

    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Storage can be unavailable in privacy-restricted browsers.
    }
  }

  const sale = sales[currentIndex];

  return (
    <AnimatePresence mode="wait">
      {isVisible && sale ? (
        <motion.div
          key={sale.id}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={
            shouldReduceMotion
              ? { duration: 0.15 }
              : { type: "spring", stiffness: 340, damping: 30 }
          }
          role="status"
          aria-live="polite"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-outline-variant/50 bg-surface/95 p-4 text-left shadow-2xl shadow-black/10 backdrop-blur-md dark:bg-[#141414]/95 sm:bottom-6 sm:left-6"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-5" aria-hidden="true" />
            </div>

            <div className="min-w-0 flex-1 pr-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                {sale.isDemo ? "Popular choice" : "Recent purchase"}
              </p>
              <p className="mt-1 truncate text-sm font-semibold text-on-surface">
                {sale.customerLabel} picked {sale.packageName}
              </p>
              <p className="mt-1 text-xs text-on-surface-variant">
                {sale.credits} credits <span aria-hidden="true">&middot;</span>{" "}
                {formatRelativeTime(sale.createdAt)}
              </p>
            </div>

            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss recent sales notification"
              className="shrink-0 rounded-full p-1 text-on-surface-variant transition-colors hover:bg-on-surface/10 hover:text-on-surface"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
