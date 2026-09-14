import { count } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { generations } from "@/lib/schema";

export async function GET() {
  try {
    const [{ total }] = await db
      .select({ total: count(generations.id) })
      .from(generations);

    return NextResponse.json({ success: true, count: total });
  } catch (error) {
    console.error("Failed to fetch generation count:", error);
    return NextResponse.json(
      { success: false, count: 0, error: "Failed to fetch generation count" },
      { status: 500 }
    );
  }
}
