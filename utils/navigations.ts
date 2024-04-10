import { siteConfig } from "@/config/site";
import { NavItem } from "./types";

export const footerNavItems = [
  {
    title: "product",
    links: [
      {
        label: "Docs",
        href: "#",
      },
      {
        label: "Changelog",
        href: "#",
      },
    ] satisfies NavItem[],
  },
  {
    title: "company",
    links: [
      {
        label: "About us",
        href: "#",
      },
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "sitemap",
        href: "#",
      },
    ] satisfies NavItem[],
  },
  {
    title: "resources",
    links: [
      {
        label: "Help & Support",
        href: "#",
      },
      {
        label: "What's New",
        href: "#",
      },
      {
        label: "sitemap",
        href: "#",
      },
    ] satisfies NavItem[],
  },
];

export const headerNavItems: NavItem[] = [
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "About us",
    href: "#",
  },
];
