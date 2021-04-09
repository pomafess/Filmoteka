import filmListTemplate from '../templates/film-list.hbs';
import createPagination from './pagination/index.js';
import MovieHttpService from './MovieHttpService.js';
const movieHttpService = new MovieHttpService();

function renderMainPage(filmsData, filmsContainer) {
  filmsContainer.innerHTML = filmListTemplate(filmsData.results);
  const pagination = createPagination(filmsData.total_pages)
  filmsContainer.after(pagination);
  // const pagination = createPagination(filmsData.total_pages);
  // console.log(pagination)
  // 

}
export default renderMainPage
// const movieService = new MovieHttpService();
// document.addEventListener('DOMContentLoaded', async function (event) {
//   const filmList = document.querySelector('#main .film-list');
//   const films = await movieService.fetchTrendingMovies();
// });
// function fetchTrendingMovies() {
//   const url =
//     'https://api.themoviedb.org/3/trending/movie/day?api_key=923c2cf88ec4338da74c768a045101f0';
//   return fetch(url)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Error');
//     })
//     .then(data => {
//       const result = data.results;
//       return result;
//     })
//     .catch(error => console.log(error));
// }
// function renderPopularFilms() {
//   console.log('jjjj');
//   api.fetchTrendingMovies().then(response => {
//     const markUp = mainGallery(response);
//     mainCard.insertAdjacentHTML('beforeend', markUp);
//   });
// }

// renderPopularFilms();
