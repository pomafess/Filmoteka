import filmListTemplate from '../templates/film-list.hbs';
import createPagination from './pagination/index.js';

function renderMainPage(filmsData, filmsContainer) {
  filmsContainer.innerHTML = filmListTemplate(filmsData.results);
  const pagination = createPagination(filmsData.total_pages, filmsContainer);
  filmsContainer.after(pagination);
}

export default renderMainPage

