import paginationTemplate from '../../templates/pagination.hbs';
import MovieHttpService from '../MovieHttpService.js';
import createPaginationArray from "./createPaginationArray.js";
import filmsSearchOptions from "../filmsSearchOptions.js";
import onPaginationBtnClick from './onPaginationBtnClick.js';
import renderFilms from "../renderMainPage";

const movieHttpService = new MovieHttpService();

const createPagination = (total_pages, filmsContainer) => {
    const { page } = filmsSearchOptions.options;
    const arr = createPaginationArray(total_pages);

    const paginationContainer = document.createElement("div");
    paginationContainer.className = "pagination-container";

    paginationContainer.innerHTML = paginationTemplate({ src: "", list: arr, page });
    const numbers = paginationContainer.querySelectorAll(".pages-list-link");
    const activeElement = [].find.call(numbers, item => item.textContent === `${page}`);
    activeElement.closest("li").classList.add("current-item");
    

    paginationContainer.addEventListener('click', async (e) => {
        e.preventDefault();
        filmsSearchOptions.options.page = +e.target.textContent;
        const { endpoint, options } = filmsSearchOptions;
        const filmsData = await movieHttpService.get({ endpoint, options });
        paginationContainer.remove()
        renderFilms(filmsData, filmsContainer);
    });
    return paginationContainer;

}

export default createPagination;