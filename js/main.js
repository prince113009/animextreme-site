import { fetchAnime } from './tmdb.js';
import { displayResults } from './ui.js';

document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = document.getElementById('search-input').value.trim();

  if (!query) return;

  try {
    const results = await fetchAnime(query);
    displayResults(results);
  } catch (err) {
    console.error(err);
    document.getElementById('anime-container').innerHTML = '<p>Error fetching data.</p>';
  }
});

