import { Button } from "@/components/ui/button";
import GitHub from "@/components/github";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div className="max-w-xl mx-auto mt-5 text-center">
        <h1 className="block text-4xl font-bold md:text-5xl lg:text-6xl">
          Generate QR codes Super fast⚡
        </h1>
      </div>

      <div className="max-w-3xl mx-auto mt-5 text-center">
        <p className="text-lg text-muted-foreground">
          Quickly generate QR codes for your desired media super fast. Qrbuzz
          streamlines sharing information through QR codes in the fastest way
          possible.
        </p>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        <Button size={"sm"} asChild>
          <Link href={"/create"}>Get Started</Link>
        </Button>
        <Button variant={"outline"} size={"sm"} asChild>
          <a
            href={siteConfig.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2"
          >
            <GitHub className="mr-2 size-4" />
            Open Source
          </a>
        </Button>
      </div>
    </section>
  );
}
