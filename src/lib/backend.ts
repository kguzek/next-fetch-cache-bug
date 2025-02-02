const API_BASE = "https://www.episodate.com/api";

export interface TvShow {
  name: string;
  id: number;
  description: string;
  permalink: string;
}

const PLACEHOLDER_SHOW: TvShow = {
  name: "Show not found",
  id: 0,
  description: "No description available",
  permalink: "random-show",
};

export const invalidIds = new Set();

export async function getMostPopularShows(page: number): Promise<TvShow[]> {
  const data = await fetchFromEpisodate(`most-popular?page=${page}`, {
    tv_shows: [PLACEHOLDER_SHOW],
  });
  return data.tv_shows as TvShow[];
}

export async function getShowDetails(
  showId: string | number
): Promise<TvShow | []> {
  const data = await fetchFromEpisodate(`show-details?q=${showId}`, {
    tvShow: PLACEHOLDER_SHOW,
  });
  const tvShow = data.tvShow as TvShow | [];
  if (Array.isArray(tvShow)) {
    invalidIds.add(showId);
  }
  return tvShow;
}

async function fetchFromEpisodate<T>(
  endpoint: string,
  fallback: T
): Promise<T> {
  const requestInit: RequestInit = {
    headers: {
      Accept: "application/json",
    },
    next: { revalidate: 5 },
  };
  const res = await fetch(`${API_BASE}/${endpoint}`, requestInit);
  const data = await res.text();
  let parsed;
  try {
    parsed = JSON.parse(data);
  } catch (error) {
    console.error("Failed to parse:", error);
    return fallback;
  }
  return parsed;
}
