class Movie {
    constructor(item, genres) {
        this.id = item.id
        this.title = item.title;
        this.genresIds = item.genre_ids;
        this.genres = this.getMovieGenresHtml(genres);
        this.image = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    }

    getMoviePreviewHtml (){
        const li = document.createElement('li');
        li.classList = 'list-item item-' + this.id;
        li.setAttribute('data-id', this.id);
        li.innerHTML = `<div class="img-hldr"><img src="${this.image}" alt="" /></div>
                        <div class="info-hldr">
                            <h4>${this.title}</h4>
                        </div>
                        ${this.genres}`;

        return li;
    }

    getMovieGenresHtml (genres) {
        const div = document.createElement('div');
        const ul = document.createElement('ul');
        let genre;

        div.className = 'genres-hldr';
        ul.className = 'genres-list';

        this.genresIds.forEach((item) => {
            genre = this.getGenreHtml(item, genres);
            ul.append(genre);
        });

        div.append(ul);
        
        return div.outerHTML;
    }

    getGenreHtml (item, genres) {
        const li = document.createElement('li');

        li.innerHTML = genres[item];

        return li;
    }

}