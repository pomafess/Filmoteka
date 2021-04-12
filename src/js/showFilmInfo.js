import MovieHttpService from './MovieHttpService.js';
import openModal from './openModal.js';

import filmInfoTemplate from '../templates/film-info.hbs';

const movieHttpService = new MovieHttpService();

function showFilmInfo(e) {
  e.preventDefault();

  const { target } = e;

  if (target !== this) {
    const { id } = target.dataset;
    console.log(id);
    const data = movieHttpService.getMovieInfo(id);
    data.then(result => {
      //data = результат вызова movieHttpService для передачи в шаблон.
      const filmInfo = filmInfoTemplate(result);
      // console.log( filmInfo);
      openModal(filmInfo, id);
    });
  }
}
export default showFilmInfo;
