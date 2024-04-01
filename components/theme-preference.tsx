"use client";

import { Laptop, Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

export function ThemePreference() {
  const { setTheme } = useTheme();
  return (
    <div className="inline-flex rounded-lg shadow-sm">
      <button
        type="button"
        className="inline-flex items-center px-4 py-3 text-sm font-medium border shadow-sm gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg focus:z-10 border-border bg-background text-foreground hover:bg-muted disabled:opacity-50 disabled:pointer-events-none"
        title="Dark theme"
        onClick={() => setTheme("dark")}
      >
        <Moon className="flex-shrink-0 size-4" />
      </button>
      <button
        type="button"
        className="inline-flex items-center px-4 py-3 text-sm font-medium border shadow-sm gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg focus:z-10 border-border bg-background text-foreground hover:bg-muted disabled:opacity-50 disabled:pointer-events-none"
        title="Light theme"
        onClick={() => setTheme("light")}
      >
        <Sun className="flex-shrink-0 size-4" />
      </button>
      <button
        type="button"
        className="inline-flex items-center px-4 py-3 text-sm font-medium border shadow-sm gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg focus:z-10 border-border bg-background text-foreground hover:bg-muted disabled:opacity-50 disabled:pointer-events-none"
        title="System theme"
        onClick={() => setTheme("system")}
      >
        <Laptop className="flex-shrink-0 size-4" />
      </button>
    </div>
  );
}
