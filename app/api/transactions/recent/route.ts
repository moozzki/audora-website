import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { transactions } from "@/lib/schema";

const DISPLAY_LIMIT = 5;

type RecentSale = {
  id: string;
  customerLabel: string;
  packageName: string;
  credits: number;
  createdAt: string;
  isDemo: boolean;
};

const demoActivities = [
  { customerLabel: "A creator", packageName: "Creator", credits: 30, minutesAgo: 8 },
  { customerLabel: "A designer", packageName: "Starter", credits: 10, minutesAgo: 24 },
  { customerLabel: "Someone in the community", packageName: "Studio", credits: 75, minutesAgo: 61 },
  { customerLabel: "A product builder", packageName: "Creator", credits: 30, minutesAgo: 143 },
  { customerLabel: "A creative team", packageName: "Starter", credits: 10, minutesAgo: 227 },
];

function getPackageName(credits: number) {
  if (credits === 10) return "Starter";
  if (credits === 30) return "Creator";
  if (credits === 75) return "Studio";
  return `${credits} credits`;
}

function getDemoActivities(): RecentSale[] {
  const now = Date.now();

  return demoActivities.map((activity, index) => ({
    id: `demo-${index + 1}`,
    customerLabel: activity.customerLabel,
    packageName: activity.packageName,
    credits: activity.credits,
    createdAt: new Date(now - activity.minutesAgo * 60 * 1000).toISOString(),
    isDemo: true,
  }));
}

export async function GET() {
  try {
    const rows = await db
      .select({
        credits: transactions.creditAmount,
        createdAt: transactions.createdAt,
      })
      .from(transactions)
      .where(eq(transactions.paymentStatus, "paid"))
      .orderBy(desc(transactions.createdAt))
      .limit(DISPLAY_LIMIT);

    const realSales: RecentSale[] = rows.map((transaction, index) => ({
      id: `real-${index + 1}`,
      customerLabel: "A creator",
      packageName: getPackageName(transaction.credits),
      credits: transaction.credits,
      createdAt: transaction.createdAt?.toISOString() ?? new Date().toISOString(),
      isDemo: false,
    }));

    const sales = [
      ...realSales,
      ...getDemoActivities().slice(0, DISPLAY_LIMIT - realSales.length),
    ]
      .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

    return NextResponse.json({ success: true, sales });
  } catch (error) {
    console.error("Failed to fetch recent sales:", error);
    return NextResponse.json({
      success: true,
      sales: getDemoActivities().slice(0, DISPLAY_LIMIT),
    });
  }
}
