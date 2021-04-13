import filmListTemplate from '../../templates/film-list.hbs';
import createPagination from '../pagination';

function renderFilms(filmsData, filmsContainer) {
  filmsContainer.innerHTML = filmListTemplate(filmsData.results);
  const pagination = createPagination(filmsData.total_pages, filmsContainer);
  filmsContainer.after(pagination);

  if (filmsData.total_pages === 1) {
    const paginationButton = document.querySelector('.pages-list-item')
    paginationButton.classList.add('hidden-button')
  } else {
    const paginationButton = document.querySelector('.pages-list-item')
    paginationButton.classList.remove('hidden-button')
  }
}

export default renderFilms

