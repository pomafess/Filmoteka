import './sass/main.scss';
import MovieHttpService from './js/MovieHttpService';
import renderFilms from './js/renderMainPage';
import showFilmInfo from './js/showFilmInfo';
import closeModal from './js/closeModal';
import searchFilmForm from './js/searchFilmForm';
import filmsSearchOptions from "./js/filmsSearchOptions"


import svg from './images/sprite.svg';
import headerTemplate from './templates/header.hbs';
// import headerLibraryTemplate from './templates/header-2.hbs';
import mainGalleryTemplate from './templates/main-gallery.hbs';
import footerTemplate from './templates/footer.hbs';
// import spinerTemplate from './templates/spiner.hbs';
import modalTemplate from './templates/modal.hbs';

const headerContainer = document.getElementById('header');
// const headerLibraryContainer = document.getElementById('header-2');
const mainContainer = document.getElementById('main');
const footerContainer = document.getElementById('footer');
// const spinerContainer = document.getElementById('spiner');
const modalContainer = document.getElementById('myModal');


headerContainer.innerHTML = headerTemplate({ src: svg });
mainContainer.innerHTML = mainGalleryTemplate();
footerContainer.innerHTML = footerTemplate({ src: svg });
modalContainer.innerHTML = modalTemplate();


const movieHttpService = new MovieHttpService();

// const filmsSearchOptions = {
//     endpoint: 'trending/all/day',
//     options: {
//         page: 1
//     }
// }

window.addEventListener('DOMContentLoaded', async () => {
    const listGallery = document.querySelector('.film-list');
    // filmsSearchOptions.endpoint = "movie/search"
    // filmsSearchOptions.options.query = "batman"
    try {
        const filmsData = await movieHttpService.get(filmsSearchOptions);

        renderFilms(filmsData, listGallery);
        listGallery.addEventListener('click', showFilmInfo)
    } catch (error) {
        console.log(error)
        listGallery.innerHTML = `<p>Movie is not found.</p>`;
    }
    const closeModalButton = modalContainer.querySelector('.close');
    closeModalButton.addEventListener('click', closeModal);
    const formSearch = document.getElementById('search-film');
    formSearch.addEventListener('submit', searchFilmForm)
});
// headerLibraryContainer.innerHTML = headerLibraryTemplate();
// headerLibraryContainer.innerHTML = headerLibraryTemplate();
// spinerContainer.innerHTML = spinerTemplate({ src: spinnerSrc });




// import './js/modal.js';

// const debounce = require('lodash.debounce')
