/**
 * Safe one-off migration: creates the waitlist table only.
 * Does NOT touch any existing tables.
 * Run with: node --env-file=.env scripts/migrate-waitlist.mjs
 */
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

await sql`
  CREATE TABLE IF NOT EXISTS waitlist (
    id        SERIAL PRIMARY KEY,
    email     VARCHAR(255) NOT NULL UNIQUE,
    status    VARCHAR(50)  DEFAULT 'pending',
    joined_at TIMESTAMP    NOT NULL DEFAULT NOW()
  )
`;

console.log("✅ waitlist table created (or already exists). Done.");
process.exit(0);
