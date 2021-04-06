export default class MovieApiService {
    constructor() {
        this.inputValue = '';
        this.searchQuery = '';
        this.total_pages;
        this.total_results;
        this.page = 1;
        this.url;
        this.API_KEY = '923c2cf88ec4338da74c768a045101f0';
        this.baseUrl = `https://api.themoviedb.org/3`;
    }

}
