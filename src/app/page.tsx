import { getMostPopularShows } from "@/lib/backend";
import Link from "next/link";

export default async function Home() {
  const page = Math.floor(Math.random() * 1000) + 1;
  const mostPopular = await getMostPopularShows(page);
  return (
    <main>
      <h3 className="mb-4 text-xl">
        Most popular TV shows page {page}, from{" "}
        <Link
          href={`https://www.episodate.com/api/most-popular?page=${page}`}
          className="hover:underline text-blue-500"
        >
          episodate.com/api/most-popular?page={page}
        </Link>
      </h3>
      <ul className="p-4 border-white border-2 rounded-md">
        {mostPopular.map((show) => (
          <li key={show.permalink}>
            <Link
              href={`/${show.permalink}`}
              className="hover:underline text-blue-100"
            >
              {show.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-blue-500 text-center hover:underline">
        <Link href="/random-show">Visit a random TV show</Link>
      </p>
    </main>
  );
}
