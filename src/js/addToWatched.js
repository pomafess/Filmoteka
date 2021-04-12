import favoriteFilm from './localFavoriteFilms.js';

function addToWatched(id) {
  const addWatchBtn = document.querySelector('.btn-modal-add');

  if (favoriteFilm.includes(id)) {
    addWatchBtn.classList.add('isActive');
    addWatchBtn.textContent = 'ADDED TO LIBRARY';
  }
  addWatchBtn.addEventListener('click', () => {
    addWatchBtn.classList.toggle('isActive');

    const isActive = addWatchBtn.classList.contains('isActive');
    addWatchBtn.textContent = isActive ? 'ADDED TO LIBRARY' : 'ADD TO WATCHED';

    if (!favoriteFilm.includes(id)) {
      favoriteFilm.push(id);
    } else {
      const index = favoriteFilm.indexOf(id);
      favoriteFilm.splice(index, 1);
    }

    const favoriteFilmString = JSON.stringify(favoriteFilm);

    localStorage.setItem('favorite-films', favoriteFilmString);
  });
}

export default addToWatched;
