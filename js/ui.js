import { getPosterUrl } from './tmdb.js';
import { showModal } from './modal.js';

export function createAnimeCard(anime) {
  const card = document.createElement('div');
  card.className = 'anime-card';

  const img = document.createElement('img');
  img.src = getPosterUrl(anime.poster_path);
  img.alt = anime.name;

  const title = document.createElement('h3');
  title.textContent = anime.name;

  card.appendChild(img);
  card.appendChild(title);

  card.addEventListener('click', () => showModal(anime));

  return card;
}

export function displayResults(results) {
  const container = document.getElementById('anime-container');
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = '<p>No anime found.</p>';
    return;
  }

  results.forEach(anime => {
    container.appendChild(createAnimeCard(anime));
  });
}

