import MovieHttpService from './MovieHttpService.js';
import renderFilms from './renderMainPage';
import filmsSearchOptions from './filmsSearchOptions.js';

const movieHttpService = new MovieHttpService();

async function searchFilmForm(e) {
    e.preventDefault();
    const listGallery = document.querySelector('.film-list');
    const myInput = this.querySelector("[name=query]");
    const myInputValue = myInput.value;
    
    try {
        filmsSearchOptions.options.query = myInputValue;
        filmsSearchOptions.endpoint = "search/movie";
        const films = await movieHttpService.get(filmsSearchOptions);        
        if (!films.results.length) {
            myInput.insertAdjacentHTML("afterend", `
            <p class="not-found">Search result not successful. Enter the correct movie name</p>
            `)
        } else {
            renderFilms(films, listGallery);
            const errorMsg = this.querySelector('.not-found');
            if (errorMsg) {
                errorMsg.remove();
            }
        }
        this.reset();
    }
    catch (error) {
        console.log(error)
        return error;
    }
}
export default searchFilmForm;
