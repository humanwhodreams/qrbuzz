import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="max-w-xl mx-auto mt-5 text-center">
          <h1 className="block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-200">
            Generate QR codes Super fast⚡
          </h1>
        </div>

        <div className="max-w-3xl mx-auto mt-5 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Quickly generate QR codes for your desired media super fast. Qrbuzz
            streamlines sharing information through QR codes in the fastest way
            possible.
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <Button size={"sm"}>
            <Link href={"/create"}>Get Started</Link>
          </Button>
          <Button variant={"outline"} size={"sm"} asChild>
            <a
              href="http://github.com/fromenoabasi/qrbuzz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2"
            >
              <Github className="mr-2 size-4" />
              Open Source
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
