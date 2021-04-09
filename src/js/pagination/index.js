import paginationTemplate from '../../templates/pagination.hbs';
import MovieHttpService from '../MovieHttpService.js';
import createPaginationArray from "./createPaginationArray.js";
import filmsSearchOptions from "../filmsSearchOptions.js";
import onPaginationBtnClick from './onPaginationBtnClick.js'

const movieHttpService = new MovieHttpService();

const createPagination = (total_pages) => {
    const { page } = filmsSearchOptions.options;
    const arr = createPaginationArray(total_pages);

    const paginationContainer = document.createElement("div");
    paginationContainer.className = "pagination-container";

    paginationContainer.innerHTML = paginationTemplate({ src: "", list: arr, page });
    const numbers = paginationContainer.querySelectorAll(".pages-list-link");
    const activeElement = [].find.call(numbers, item => item.textContent === `${page}`);
    activeElement.closest("li").classList.add("current-item");
    paginationContainer.addEventListener('click', onPaginationBtnClick)
    return paginationContainer;

}

export default createPagination;