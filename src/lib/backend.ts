const API_BASE = "https://www.episodate.com/api";

export async function getMostPopularShows() {
  const res = await fetchFromEpisodate("most-popular");
  const data = await res.json();
  return data.tv_shows as { id: number; name: string }[];
}

export async function getShowDetails(showId: string) {
  const res = await fetchFromEpisodate(`show-details?q=${showId}`);
  const data = await res.json();
  return data.tvShow as { name: string; description: string };
}

function fetchFromEpisodate(endpoint: string) {
  const requestInit: RequestInit = {
    headers: {
      Accept: "application/json",
    },
    next: { revalidate: 5 },
  };
  return fetch(`${API_BASE}/${endpoint}`, requestInit);
}
