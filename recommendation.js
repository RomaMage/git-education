class Recommendation {

    showRecommendsHtml(items) {
        const ul = document.createElement('ul');
        const div = document.createElement('div');

        div.className = 'recommendations-list';
        div.innerHTML = `<h3>Recommendations</h3>`;
        
        items.forEach(item => {
            ul.innerHTML += this.getRecommendationHtml(item);
        });
        div.innerHTML += ul.outerHTML;
        
        return div;
    }

    getRecommendationHtml(item) {
        const li = document.createElement('li');

        li.className = 'recommendation-item';
        li.innerHTML = `<h4>${item.title}</h4>
                        <div class="img-hldr">
                            <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="" />
                        </div>`;

        return li.outerHTML;
    }
}