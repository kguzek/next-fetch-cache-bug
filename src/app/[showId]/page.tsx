import { getShowDetails } from "@/lib/backend";

export default async function Show({
  params,
}: {
  params: Promise<{ showId: string }>;
}) {
  const { showId } = await params;
  const showDetails = await getShowDetails(showId);
  return (
    <div>
      <h1 className="text-xl mb-1">{showDetails.name}</h1>
      <p>{showDetails.description}</p>
    </div>
  );
}
