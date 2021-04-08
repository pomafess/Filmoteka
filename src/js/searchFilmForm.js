import MovieHttpService from './MovieHttpService.js';
import renderFilms from './renderMainPage';

const movieHttpService = new MovieHttpService();

function searchFilmForm(e) {
    e.preventDefault();
    // переписать свойство endpoint глобального обьекта filmsSearchOptions
    //вызвать функцию Http service
    //вызвать функцию renderFilms и предать результат ответа
}
export default searchFilmForm;