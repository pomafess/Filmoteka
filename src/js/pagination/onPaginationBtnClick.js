import MovieHttpService from '../MovieHttpService.js';
const movieHttpService = new MovieHttpService();
import filmsSearchOptions from "../filmsSearchOptions.js";

const onPaginationBtnClick = (e) => {
    e.preventDefault();
    // console.log(filmsSearchOptions)
    filmsSearchOptions.options.page++;
    console.log(filmsSearchOptions)
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target.dataset.id !== 'pagination-item') {
        return;
    }

    if (e.target !== e.currentTarget) {
        const page = e.target.textContent;
    console.log(page);

        if (page === '...') {
            return;
        }
    }
        const fetch = movieHttpService.get(endpoint, );
        return fetch;

}

export default onPaginationBtnClick