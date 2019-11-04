class MovieCard {
    constructor(item) {
        this.title = item.title;
        this.image = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    }

    getCardHtml() {
        const div = document.createElement('div');
        
        div.className = 'movie-card';
        div.innerHTML = `<h4>${this.title}</h4>
                        <div class="img-hldr">
                            <img src="${this.image}" alt="" />
                        </div>`;

        return div.outerHTML;
    }

    showRecommendsHtml(items) {
        const div = document.createElement('div');

        div.className = 'recommendations-list';
        items.results.forEach(item => {
            div.innerHTML += this.getRecommendationHtml(item);
        });

        this.recommendations = div.outerHTML;
    }

    getRecommendationHtml(item) {
        const div = document.createElement('div');

        div.className = 'recommendation-item';
        div.innerHTML = `<h4>${item.title}</h4>
                        <div class="img-hldr">
                            <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="" />
                        </div>`;
                        
        return div.outerHTML;
    }
}