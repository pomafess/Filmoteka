import './sass/main.scss';

import MovieHttpService from './js/MovieHttpService';
import renderFilms from './js/renderMainPage';
import showFilmInfo from './js/showFilmInfo';
import closeModal from './js/closeModal';
import searchFilmForm from './js/searchFilmForm';
import filmsSearchOptions from './js/filmsSearchOptions';
import loader from './js/loader';

import svg from './images/sprite.svg';
import headerTemplate from './templates/header.hbs';
import mainGalleryTemplate from './templates/main-gallery.hbs';
import footerTemplate from './templates/footer.hbs';
import modalTemplate from './templates/modal.hbs';

const headerContainer = document.getElementById('header');
const mainContainer = document.getElementById('main');
const footerContainer = document.getElementById('footer');
const modalREf = document.getElementById('modal');

headerContainer.innerHTML = headerTemplate({ src: svg });
mainContainer.innerHTML = mainGalleryTemplate();
footerContainer.innerHTML = footerTemplate({ src: svg });
document.body.insertAdjacentHTML('beforeend', modalTemplate());

const movieHttpService = new MovieHttpService();

window.addEventListener('DOMContentLoaded', async () => {
  const listGallery = document.querySelector('.film-list');
  try {
    const filmsData = await movieHttpService.get(filmsSearchOptions);

    renderFilms(filmsData, listGallery);
  } catch (error) {
    console.log(error);
    listGallery.innerHTML = `<p>Movie is not found.</p>`;
  }
  listGallery.addEventListener('click', showFilmInfo);

  const closeModalButton = document.querySelector('.close');
  closeModalButton.addEventListener('click', closeModal);

  window.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  });

  // const closeModalButton = modalREf.querySelector('.close');
  // closeModalButton.addEventListener('click', closeModal);

  const formSearch = document.getElementById('search-form');
  formSearch.addEventListener('submit', searchFilmForm);
});
