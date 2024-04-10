import { Brand } from "./brand";
import GitHub from "./github";
import Link from "next/link";
import { ThemePreference } from "./theme-preference";
import { ThemePreferenceMobile } from "./theme-preference-mobile";
import X from "./x";
import { devConfig } from "@/config/dev";
import { footerNavItems } from "@/utils/navigations";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto pt-24">
      <div className="grid grid-cols-2 gap-6 mb-10 md:grid-cols-4 lg:grid-cols-5">
        <div className="hidden col-span-full lg:col-span-1 lg:block">
          <Brand />
          <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
            &copy; 2024 {siteConfig.metadata.title}.
          </p>
        </div>

        {footerNavItems.map((f) => (
          <div key={f.title}>
            <h4 className="text-xs font-semibold uppercase">{f.title}</h4>

            <div className="grid mt-3 space-y-3 text-sm">
              {f.links.map((l, i) => (
                <p key={i}>
                  <Link
                    href={l.href}
                    className="inline-flex gap-x-2 text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h4 className="text-xs font-semibold uppercase">Developers</h4>

          <div className="grid mt-3 space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-muted-foreground hover:text-foreground"
                href={siteConfig.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>

          <h4 className="text-xs font-semibold uppercase mt-3">Preferences</h4>

          <div className="hidden sm:grid mt-3">
            <ThemePreference />
          </div>
          <div className="grid mt-3 sm:hidden">
            <ThemePreferenceMobile />
          </div>
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-border">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-3">
            <div className="space-x-4 text-sm">
              <Link
                className="inline-flex gap-x-2 text-muted-foreground hover:text-foreground"
                href="#"
              >
                Terms
              </Link>
              <Link
                className="inline-flex gap-x-2 text-muted-foreground hover:text-foreground"
                href="#"
              >
                Privacy
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="mt-3 sm:hidden">
              <Brand />
              <p className="mt-1 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                &copy; 2024 {siteConfig.metadata.title}.
              </p>
            </div>

            <div className="space-x-4">
              <a
                href={siteConfig.source}
                target="_blank"
                rel="noopener noreferrer" className="inline-block"
              >
                <GitHub className="flex-shrink-0 size-4 text-muted-foreground hover:text-foreground" />
              </a>
              <a href={devConfig.x} target="_blank" rel="noopener noreferrer" className="inline-block">
                <X className="flex-shrink-0 size-4 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
