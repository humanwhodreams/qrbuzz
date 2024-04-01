import Link from "next/link";

export function Brand() {
  return (
    <Link
      href={"/"}
      className="flex-none text-xl font-semibold"
      aria-label="Qrbuzz"
    >
      Qrbuzz
    </Link>
  );
}
