class Movie {
    constructor(listId) {
        this.apiKey = '443bd2392b8c96a6c980a58f840abc19';
        // this.listId = listId;
    }

    async getMovies() {

        const current_date = Date(Date.now());
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key = ${this.apiKey}&primary_release_date.gte = ${current_date}`);
        const responseData = await response.json();
        
        return responseData;
    }

    // changeList(Id) {
    //     this.listId = Id;
    // }
}