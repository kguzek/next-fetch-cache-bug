import { RandomiseButton } from "@/components/randomise-button";
import { TvShow } from "@/lib/backend";

export default async function ShowDetails({ tvShow }: { tvShow: TvShow }) {
  return (
    <main className="flex flex-col items-start">
      <RandomiseButton />
      <div>
        <h3 className="text-xl mb-1">{tvShow.name}</h3>
        <p>
          <i className="italic">{tvShow.description}</i>
        </p>
      </div>
    </main>
  );
}
