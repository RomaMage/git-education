class MovieCard {
    constructor(item) {
        this.title = item.title;
        this.image = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    }

    getCardHtml(recommendationsHtml) {
        const div = document.createElement('div');
        console.log(recommendationsHtml);
        
        div.className = 'movie-card';
        div.innerHTML = `<h4>${this.title}</h4>
                        <div class="img-hldr">
                            <img src="${this.image}" alt="" />
                        </div>
                        ${recommendationsHtml.outerHTML}
                        <a id="close-button">X</a>`;

        return div.outerHTML;
    }
}