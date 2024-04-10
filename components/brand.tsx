import Link from "next/link";
import { siteConfig } from "@/config/site";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: ClassValue[] }) {
  return (
    <Link
      href={"/"}
      className={cn("flex-none text-xl font-bold", className)}
      aria-label={siteConfig.metadata.title}
    >
      {siteConfig.metadata.title}
    </Link>
  );
}
