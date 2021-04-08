
const axios = require('axios');

class MovieHttpService {
  static KEY = '923c2cf88ec4338da74c768a045101f0';
  static BASE_URL = 'https://api.themoviedb.org/3';
  get({ endpoint, options }) {
    const fullURL = this.getFullUrl({ endpoint, options })
    axios.get(fullURL);
    //вернуть ответ, в котором в каждом фильме будет свойство genres = ['жанр" "жанр"]
  }

  getAllGenres() {
    const fullURL = this.getFullUrl({ endpoint: 'allgenres' })
    axios.get(fullURL);
  }

  getFullUrl({ endpoint, options = '' }) {
    const fullUrl = `${MovieHttpService.BASE_URL}/${endpoint}?api_key=${MovieHttpService.KEY}&${options}`;
    return fullUrl
  }
}
/////////////////////// Макс прости ...........
//   constructor() {
//     this.searchQuery = 'hatiko';

//     this.name = '';
//     this.movieId = 550;

//     this.page = 1;
//   }

//   // https://api.themoviedb.org/3/trending/movie/day?api_key=923c2cf88ec4338da74c768a045101f0
//   async fetchTrendingMovies() {
//     const url = `${MovieHttpService.BASE_URL}/trending/movie/day?api_key=${MovieHttpService.KEY}`;
//     try {
//       const { data } = await axios.get(url);
//       const { results: films } = data;
//       const genres = await this.fetchMoviesGenre();
//       const filmCards = films.map(film => {
//         const filmGenres = film.genre_ids.map(id => {
//           const { name } = genres.find(genre => genre.id === id);
//           return name;
//         });
//         const [release_year] = film.release_date.split('-');
//         const filmCard = { ...film, filmGenres, release_year };
//         return filmCard;
//       });
//       return filmCards;
//     } catch (error) {
//       console.log(error);
//       return error;
//     }

//     // return fetch(url)
//     //   .then(response => {
//     //     if (response.ok) {
//     //       return response.json();
//     //     }
//     //     throw new Error(response.status);
//     //   })
//     //   .then(data => {
//     //     const result = data.results;
//     //     console.log(result);
//     //     return result;
//     //   })
//     //   .catch(error => console.log(error));
//   }
//   fetchMovie() {
//     // https://api.themoviedb.org/3/search/movie?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US&page=1&include_adult=false&query=batman`

//     const url = `${MovieHttpService.BASE_URL}/search/movie?api_key=${MovieHttpService.KEY}&language=en-US&page=${this.page}&include_adult=false&query=${this.searchQuery}`;
//     return fetch(url)
//       .then(response => {
//         if (response.ok) {
//           // console.log(response);
//           return response.json();
//         }
//         throw new Error(response.status);
//       })
//       .then(data => {
//         // console.log(data);
//         return data;
//       })
//       .catch(error => console.log(error));
//   }
//   // https://api.themoviedb.org/3/genre/movie/list?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US
//   async fetchMoviesGenre() {
//     const url = `${MovieHttpService.BASE_URL}/genre/movie/list?api_key=${MovieHttpService.KEY}&language=en-US`;

//     try {
//       const { data } = await axios.get(url);
//       return data.genres;
//     } catch (error) {
//       console.log(error);
//       return error;
//     }

//     // return fetch(url)
//     //   .then(response => {
//     //     if (response.ok) {
//     //       return response.json();
//     //     }
//     //     throw new Error(response.status);
//     //   })
//     //   .then(data => data)

//     //   .catch(error => console.log(error));
//   }
//   // https://api.themoviedb.org/3/movie/?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US
//   fetchMovieInfo() {
//     const url = `${MovieHttpService.BASE_URL}/movie/${this.movieId}?api_key=${MovieHttpService.KEY}`;
//     return fetch(url)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error(response.status);
//       })
//       .then(({ results }) => {
//         console.log(results);
//         return results;
//       })
//       .catch(error => console.log(error));
//   }
//   // fetchMovieId() {
//   //   const url = `${MovieHttpService.BASE_URL}/users/${id}`;

//   //   return fetch(url).then(response => {
//   //     if (response.ok) {
//   //       return response.json();
//   //     }
//   //     throw new Error(response.status);
//   //   });

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
//   get queryId() {
//     return this.movieId;
//   }
//   set queryId(value) {
//     this.movieId = value;
//   }
// }

export default MovieHttpService;

// request.fetchMovie();
// request.fetchMoviesGenre();
// request.fetchTrendingMovies();
// request.fetchMovieInfo();
