import favoriteFilm from './localFavoriteFilms.js';

function addToWatched(id) {
  const addWatchBtn = document.querySelector('.btn-modal-add');

  addWatchBtn.addEventListener('click', () => {
    addWatchBtn.classList.toggle('isActive');

    const isActive = addWatchBtn.classList.contains('isActive');
    addWatchBtn.textContent = isActive ? 'uje est v bibl' : 'add to watched';

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
