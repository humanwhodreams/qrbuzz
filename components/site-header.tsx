"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { headerNavItems } from "@/utils/navigations";

export function SiteHeader() {
  return (
    <header className="z-50 flex flex-wrap w-full py-3 text-sm sm:justify-start sm:flex-nowrap sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 sm:py-2"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Brand />

          <div className="sm:hidden">
            <MobileNav />
          </div>
        </div>

        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList>
            {headerNavItems.map((h, i) => (
              <NavigationMenuItem key={i}>
                <Link href={h.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle())}
                  >
                    {h.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <Link href="/create" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle())}
                >
                  Create
                  <ArrowUpRight className="flex-shrink-0 ml-2 size-4" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
