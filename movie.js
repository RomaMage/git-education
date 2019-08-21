class Movie {
    constructor(listId) {
        this.apiKey = '443bd2392b8c96a6c980a58f840abc19';
    }

    async getMovies(page) {
        page = (typeof page !== 'undefined') ? page : 1;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&page=${page}`);
        const responseData = await response.json();
        
        return responseData;
    }

}