import type { Config } from "drizzle-kit";

export default {
  schema: "./shared/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",   // ✅ IMPORTANT (not driver)
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;