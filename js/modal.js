import { getPosterUrl } from './tmdb.js';

export function showModal(anime) {
  const modal = document.getElementById('anime-modal');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <img src="${getPosterUrl(anime.backdrop_path || anime.poster_path)}" alt="${anime.name}">
    <h2>${anime.name}</h2>
    <p>${anime.overview || 'No description available.'}</p>
    <p><strong>Rating:</strong> ${anime.vote_average}/10</p>
    <p><strong>Release Date:</strong> ${anime.first_air_date || 'N/A'}</p>
    <button id="close-modal">Close</button>
  `;

  modal.style.display = 'block';

  document.getElementById('close-modal').onclick = () => {
    modal.style.display = 'none';
  };
}

