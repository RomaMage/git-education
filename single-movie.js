class MovieCard {
    constructor(item) {
        this.title = item.title;
        this.image = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    }

    getCardHtml() {
        const div = document.createElement('div');

        div.innerHTML = `<div class="movie-card">
                            <h4>${this.title}</h4>
                            <div class="img-hldr">
                                <img src="${this.image}" alt="" />
                            </div>
                        </div>`;

        return div.outerHTML;
    }
}