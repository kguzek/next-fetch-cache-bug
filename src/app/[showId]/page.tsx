import { RandomiseButton } from "@/components/randomise-button";
import ShowDetails from "@/components/tv-show";
import { getShowDetails } from "@/lib/backend";

export default async function Show({
  params,
}: {
  params: Promise<{ showId: string }>;
}) {
  const { showId } = await params;
  const showDetails = await getShowDetails(showId);
  if (Array.isArray(showDetails)) {
    return (
      <div>
        <h3 className="text-3xl mb-4">404 Not Found</h3>
        <p className="text-xl mb-2">
          The show with ID
          <code className="bg-gray-800 py-2 mx-2 rounded-md"> {showId} </code>
          was not found.
        </p>
        <RandomiseButton />
      </div>
    );
  }
  return <ShowDetails tvShow={showDetails} />;
}
