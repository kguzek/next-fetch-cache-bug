"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function RandomiseButton() {
  const router = useRouter();
  const path = usePathname();

  const className =
    "bg-blue-500 text-white py-1 px-2 rounded-md mb-2 self-center";

  return path === "/random-show" ? (
    <button onClick={router.refresh} className={className}>
      Randomise
    </button>
  ) : (
    <Link href="/random-show" className={className}>
      Randomise
    </Link>
  );
}
