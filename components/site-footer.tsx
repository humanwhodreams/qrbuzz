import { Github, Twitter } from "lucide-react";

import { Brand } from "./brand";
import { ThemePreference } from "./theme-preference";

export function SiteFooter() {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto pt-24">
      <div className="grid grid-cols-2 gap-6 mb-10 md:grid-cols-4 lg:grid-cols-5">
        <div className="hidden col-span-full lg:col-span-1 lg:block">
          <Brand />
          <p className="mt-3 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
            &copy; 2024 Qrbuzz.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Product
          </h4>

          <div className="grid mt-3 space-y-3 text-sm">
            <p>
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Docs
              </a>
            </p>
            <p>
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Changelog
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Company
          </h4>

          <div className="grid mt-3 space-y-3 text-sm">
            <p>
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                About us
              </a>
            </p>
            <p>
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Blog
              </a>
            </p>
            <p>
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Sitemap
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Resources
          </h4>

          <div className="grid mt-3 space-y-3 text-sm">
            <p>
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Help &amp; Support
              </a>
            </p>

            <p>
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                What&apos;s New
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Developers
          </h4>

          <div className="grid mt-3 space-y-3 text-sm">
            <p>
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Api
                <span className="inline text-blue-600 dark:text-blue-500">
                  — Coming soon
                </span>
              </a>
            </p>

            <p>
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                GitHub
              </a>
            </p>
          </div>

          <h4 className="text-xs font-semibold text-gray-900 uppercase mt-7 dark:text-gray-100">
            Preferences
          </h4>

          <div className="grid mt-3">
            <ThemePreference />
          </div>
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-3">
            <div className="space-x-4 text-sm">
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Terms
              </a>
              <a
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Privacy
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="mt-3 sm:hidden">
              <Brand />
              <p className="mt-1 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
                &copy; 2024 Qrbuzz.
              </p>
            </div>

            <div className="space-x-4">
              <a
                href="https://github.com/fromenoabasi/qrbuzz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              >
                <Github className="flex-shrink-0 size-4" />
              </a>
              <a
                href="https://twitter.com/from_enoabasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              >
                <Twitter className="flex-shrink-0 size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
