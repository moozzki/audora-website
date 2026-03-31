"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { waitlist } from "@/lib/schema";
import { eq } from "drizzle-orm";

const WaitlistSchema = z.object({
  email: z.string().email("Format email tidak valid."),
  token: z.string().min(1, "Verifikasi keamanan gagal."),
});

type WaitlistResult =
  | { success: true; message: string }
  | { success: false; error: string };

async function verifyTurnstile(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not set.");
    return false;
  }

  const formData = new FormData();
  formData.append("secret", secretKey);
  formData.append("response", token);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: formData }
  );

  if (!res.ok) return false;

  const data = await res.json();
  return data.success === true;
}

export async function joinWaitlist(
  email: string,
  token: string
): Promise<WaitlistResult> {
  // 1. Validate input with Zod
  const parsed = WaitlistSchema.safeParse({ email, token });
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Input tidak valid.";
    return { success: false, error: firstError };
  }

  // 2. Verify Turnstile token with Cloudflare
  const isHuman = await verifyTurnstile(parsed.data.token);
  if (!isHuman) {
    return {
      success: false,
      error: "Verifikasi keamanan gagal. Silakan coba lagi.",
    };
  }

  // 3. Check for duplicate email
  const existing = await db
    .select()
    .from(waitlist)
    .where(eq(waitlist.email, parsed.data.email))
    .limit(1);

  if (existing.length > 0) {
    return {
      success: false,
      error: "Looks like you're already on the list! Thanks for the excitement.",
    };
  }

  // 4. Insert into Neon DB via Drizzle
  await db.insert(waitlist).values({
    email: parsed.data.email,
    status: "pending",
  });

  return {
    success: true,
    message: "Berhasil! Kamu masuk dalam daftar early access.",
  };
}
