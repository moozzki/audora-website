import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { feedbacks } from "@/lib/schema";
import { gte, desc, and, ne } from "drizzle-orm";

export async function GET() {
  try {
    const data = await db
      .select({
        id: feedbacks.id,
        rating: feedbacks.rating,
        content: feedbacks.content,
      })
      .from(feedbacks)
      .where(and(gte(feedbacks.rating, 4), ne(feedbacks.id, 1)))
      .orderBy(desc(feedbacks.createdAt))
      .limit(12);

    return NextResponse.json({ success: true, testimonials: data });
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return NextResponse.json(
      { success: false, testimonials: [], error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
