import { Button, buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemePreferenceMobile } from "./theme-preference-mobile";
import { cn } from "@/lib/utils";
import { headerNavItems } from "@/utils/navigations";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
      >
        <Menu className="flex-shrink-0" />
        <span className="sr-only">toggle menu</span>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="grid grid-cols-1 py-4 gap-4">
          {headerNavItems.map((h, i) => (
            <p key={i}>
              <Link
                href={h.href}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    className: "justify-start w-full",
                  })
                )}
              >
                {h.label}
              </Link>
            </p>
          ))}
          <p>
            <Link
              href={"/create"}
              className={cn(
                buttonVariants({
                  variant: "default",
                  className: "justify-start w-full",
                })
              )}
            >
              Create
            </Link>
          </p>

          <div>
            <ThemePreferenceMobile />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
