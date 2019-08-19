class UI {
    constructor() {
        
    }

    // getListInfo(item) {
    //     let info;

    //     info = `<div class="list-information">
    //                 <h1>${item.name}</h1>
    //                 <div class="list-description">
    //                     <p>${item.description}</p>
    //                 </div>
    //                 <div class="list-items">
    //                     <ul></ul>
    //                 </div>
    //             </div>
    //             `;

    //     return info;
    // }

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