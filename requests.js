class Requests {
    constructor() {
        this.apiKey = '443bd2392b8c96a6c980a58f840abc19';
        this.apiHost = 'https://api.themoviedb.org/3';
        this.discoverUrl = '/discover/movie';
        this.genreListUrl = '/genre/movie/list';
    }

    async getMovies(page) {
        page = (typeof page !== 'undefined') ? page : 1;
        const response = await fetch(`${this.apiHost}${this.discoverUrl}?api_key=${this.apiKey}&sort_by=popularity.desc&page=${page}`);
        const responseData = await response.json();
        
        return responseData;
    }

    async getGenres() {
        const response = await fetch(`${this.apiHost}${this.genreListUrl}?api_key=${this.apiKey}`);
        const responseData = await response.json();

        return responseData;
    }
}