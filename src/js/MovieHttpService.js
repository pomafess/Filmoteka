
const axios = require('axios');

class MovieHttpService {
  static KEY = '923c2cf88ec4338da74c768a045101f0';
  static BASE_URL = 'https://api.themoviedb.org/3';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.name = '';
    this.movieId = 550;
  }

  async get({ endpoint, options }) {
    const requestOptions = this.createOptions(options);
    const fullURL = await this.getFullUrl({ endpoint, options: requestOptions });
    try {
      const { data } = await axios.get(fullURL);
      const { results: films } = data;
      const genres = await this.getAllGenres();

      const filmCards = films.map(film => {
        const filmGenres = film.genre_ids.map(id => {
          const result = genres.find(genre => genre.id === id)
          if (!result) {
            return "";
          }
          return result.name;
        }).filter(str => str !== "");

          const release_year = film.release_date ? film.release_date.split('-')[0] : "future";
          const title = film.original_title || film.original_name;
          const filmCard = { ...film, filmGenres, release_year, title };
          return filmCard;  
      });
      data.results = filmCards;
      return data;
    }
    catch (error) {
      console.log(error);
    }
  }

  async getAllGenres() {
    const fullURL = this.getFullUrl({ endpoint: 'genre/movie/list' })
    try {
      const { data } = await axios.get(fullURL);
      return data.genres;
    } catch (error) {
      console.error('Error');
    }
  }
  
  createOptions(options) {
    let stringOptions = "";
    for (const [key, value] of Object.entries(options)) {
      stringOptions += `&${key}=${value}`
    }
    return stringOptions;
  }
  
  getFullUrl({ endpoint , options = '' }) {
    const fullUrl = `${MovieHttpService.BASE_URL}/${endpoint}?api_key=${MovieHttpService.KEY}&${options}`;
    return fullUrl
  }
}

export default MovieHttpService;