import ShowDetails from "@/components/tv-show";
import { getShowDetails, TvShow } from "@/lib/backend";
import { getRandomId } from "@/lib/random";

export default async function RandomShow() {
  let showDetails: TvShow | [];
  let id;

  do {
    id = getRandomId();
    showDetails = await getShowDetails(id);
  } while (Array.isArray(showDetails));

  return <ShowDetails tvShow={showDetails} />;
}
