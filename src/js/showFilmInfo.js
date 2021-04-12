import MovieHttpService from './MovieHttpService.js';
import openModal from './openModal.js';

import filmInfoTemplate from '../templates/film-info.hbs';

const movieHttpService = new MovieHttpService();

async function showFilmInfo(e) {
  e.preventDefault();

  const { target } = e;

  if (target !== this) {
    const { id } = target.dataset;
    try {
      const result = await movieHttpService.getMovieInfo(id);
      const filmInfo = filmInfoTemplate(result);
      openModal(filmInfo, id);
    } catch (error) {
      console.log('catch');
      openModal(`<p>Content not found</p>
      <button class="btn-modal btn-modal-add" data-film-id="{{id}}" style="display: none">add to watched</button>
      <button class="btn-modal btn-modal-queue" style="display: none">add to queue</button>`);
    }
  }
}
export default showFilmInfo;
