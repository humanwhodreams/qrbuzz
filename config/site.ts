import type { Metadata } from "next";

export const siteConfig = {
  metadata: {
    title: "Qrbuzz",
    description: "Generate QR codes super fast.",
  } satisfies Metadata,
  source: "https://github.com/fromenoabasi/qrbuzz"
} as const;
