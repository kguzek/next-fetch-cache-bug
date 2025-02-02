const API_BASE = "https://www.episodate.com/api";

export interface TvShow {
  name: string;
  id: number;
  description: string;
  permalink: string;
}

export const invalidIds = new Set();

export async function getMostPopularShows(page: number) {
  const res = await fetchFromEpisodate(`most-popular?page=${page}`);
  const data = await res.json();
  return data.tv_shows as TvShow[];
}

export async function getShowDetails(showId: string | number) {
  const res = await fetchFromEpisodate(`show-details?q=${showId}`);
  const data = await res.json();
  const tvShow = data.tvShow as TvShow | [];
  if (Array.isArray(tvShow)) {
    invalidIds.add(showId);
  }
  return tvShow;
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
