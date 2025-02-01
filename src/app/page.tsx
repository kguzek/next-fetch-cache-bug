import { getMostPopularShows } from "@/lib/backend";
import Link from "next/link";

export default async function Home() {
  const mostPopular = await getMostPopularShows();
  return (
    <main>
      <h3 className="mb-4 text-xl">
        Most popular TV shows via{" "}
        <Link
          href="https://www.episodate.com/api"
          className="hover:underline text-blue-500"
        >
          episodate.com/api
        </Link>
      </h3>
      <ul className="p-4 border-white border-2 rounded-md">
        {mostPopular.map((show) => (
          <li key={show.id}>
            <Link
              href={`/${show.id}`}
              className="hover:underline text-blue-100"
            >
              {show.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
