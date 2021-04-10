import MovieHttpService from './MovieHttpService.js';
import renderFilms from './renderMainPage';
import filmsSearchOptions from './filmsSearchOptions.js';

const movieHttpService = new MovieHttpService();

async function searchFilmForm(e) {
    e.preventDefault();
    const listGallery = document.querySelector('.film-list');
    const formSearch = document.getElementById('search-form');
    const myInput = document.getElementById("search-form-input");
    const myInputValue = myInput.value;
    
    try {
        filmsSearchOptions.options.query = myInputValue;
        filmsSearchOptions.endpoint = "search/movie";
        const films = await movieHttpService.get(filmsSearchOptions);
        if (films.results.length === 0) {
            myInput.insertAdjacentHTML("afterend", `
            <p class="not-found">Search result not successful. Enter the correct movie name</p>
            `)
        } else {
            renderFilms(films, listGallery);
            document.querySelector('.not-found').textContent = "";
        }
        formSearch.reset();
    } catch (error) {
        return error;
    }
    

    
    
    // переписать свойство endpoint глобального обьекта filmsSearchOptions
    //вызвать функцию Http service
    //вызвать функцию renderFilms и предать результат ответа
}
export default searchFilmForm;

// const myInput = document.getElementById("name-film");

//     const searchQuery = myInput.value;
//     movieService.query = searchQuery;
//     const result = movieService.fetchMovie(searchQuery);
//     const cardFilm = filmLIstTemplate(result.results);

//     if (result.results.length === 0) {
//         alert("movie not found");
//     } else {
//         listGallery.innerHTML = cardFilm;
//     }
//     formSearch.reset();