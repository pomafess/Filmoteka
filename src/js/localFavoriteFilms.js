const favoriteFilm = [];

const localFavoriteFilms = localStorage.getItem('favorite-films');
if (localFavoriteFilms) {
  favoriteFilm.push(...JSON.parse(localFavoriteFilms));
}

export default favoriteFilm;
