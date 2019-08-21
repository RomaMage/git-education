class UI {
    constructor() {
        
    }

    getMovieHtml(item) {
        const li = document.createElement('li');

        li.innerHTML = `<div class="item-${item.id} list-item">
                            <div class="img-hldr"><img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}" alt="" /></div>
                            <div class="info-hldr">
                                <h4>${item.title}</h4>
                            </div>
                        </div>`;
        
        return li;
    }
}