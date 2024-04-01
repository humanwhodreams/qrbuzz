import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Props {}

export function BlogCard({}: Props) {
  return (
    <Link
      className="overflow-hidden group rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href="#"
    >
      <div className="sm:flex">
        <div className="relative flex-shrink-0 w-full overflow-hidden rounded-xl sm:w-56 h-44">
          <img
            className="absolute top-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 size-full start-0 rounded-xl"
            src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Image Description"
          />
        </div>

        <div className="px-4 mt-4 grow sm:mt-0 sm:ms-6 sm:px-0">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
            Studio by Preline
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Produce professional, reliable streams easily leveraging Preline's
            innovative broadcast studio
          </p>
          <p className="inline-flex items-center mt-4 font-medium text-blue-600 gap-x-1 decoration-2 hover:underline">
            Read more
            <ChevronRight className="ml-2 size-4" />
          </p>
        </div>
      </div>
    </Link>
  );
}
