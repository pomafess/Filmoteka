import MovieHttpService from './MovieHttpService.js';
import filmInfoTemplate from '../templates/film-info.hbs';
import openModal from './openModal.js';
const movieHttpService = new MovieHttpService();

function showFilmInfo(e) {
    e.preventDefault();
    const { target } = e;
    if (target.classList.contains('')) {
        const { filmId } = target.dataset;

        //data = результат вызова movieHttpService для передачи в шаблон.
        const filmInfo = filmInfoTemplate(data);
        openModal(filmInfo);

    }
    
}
export default showFilmInfo;