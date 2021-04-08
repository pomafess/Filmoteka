import paginationTemplate from '../templates/pagination.hbs';
import MovieHttpService from './MovieHttpService.js';
import renderMainPage from './renderMainPage.js';

const movieHttpService = new MovieHttpService();
function createPagination(total_pages, filmsContainer) {
    //создать HTML разметку пагинации и повесить событие которое 
    //отправляет Ajax запрос на получение следующей странници и вызывает функцию 
 /// передает ответ в функцию renderMainPage
}

export default createPagination