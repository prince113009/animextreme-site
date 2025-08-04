const TMDB_API_KEY = '3cce3b62801ae08200d8afc9304e95a6'; // Your TMDB API key

export async function fetchAnime(title) {
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}&language=en-US`;

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch from TMDB');

  const data = await response.json();
  return data.results || [];
}

export function getPosterUrl(path, size = 'w500') {
  return path
    ? `https://image.tmdb.org/t/p/${size}${path}`
    : 'https://via.placeholder.com/300x450?text=No+Poster';
}

