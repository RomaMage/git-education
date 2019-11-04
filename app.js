const request = new Requests();
const ui = new UI();
const listWrapper = document.getElementById('movies-list');
const formSubmit = document.getElementById('movies-form');
const list = listWrapper.querySelector('.list-items .list');
const pagination = document.querySelector('.button-holder button');
var allGenres = new Array();


document.addEventListener('DOMContentLoaded', getMovies);
showMore();
searchMovie();
getGenres();

function getMovies(page) {
    request.getMovies(page)
    .then(results => {
        if (results.total_results > 0) {
            results.results.forEach((item) => {
                let movie = new Movie(item, allGenres);
                list.append(movie.getMoviePreviewHtml());
            });
            list.setAttribute('data-id', results.page);
        }

        showMovieInfo();
    })
    .catch(err => console.log(err));
}

function getGenres() {
    request.getGenres()
    .then(genres => {
        genres.genres.forEach((item) => {
            allGenres[item.id] = item.name;
        });
    })
    .catch(err => console.log(err));
}

function showMore() {
    if (pagination) {
        pagination.addEventListener('click', (e) => {
            let page_num = list.getAttribute('data-id');
            getMovies(parseInt(page_num) + 1);
        });
    }
}

function searchMovie() {
    const searchField = document.getElementById('search');

    searchField.addEventListener('keyup', (e) => {
        ui.searchMovie(searchField.value);
    });
}

function showMovieInfo () {
    list.querySelectorAll('li.list-item').forEach((item) => {
        item.addEventListener('click', (e) => {
            const itemId = e.target.closest('li.list-item').getAttribute('data-id');

            request.getMovie(itemId)
            .then(movie => {
                showModal(movie);
            })
            .catch(err => console.log(err));
        });
    });
}

function showModal (item) {
    const modal = document.getElementById('modal');
    const movie = new MovieCard(item);

    modal.innerHTML = movie.getCardHtml(item);
    ui.showModal(item);
    modalPosition();
}

function modalPosition() {
    let screenHeight = window.innerHeight;
    let $modal = document.querySelector('.movie-card');
    let modalHeight = $modal.offsetHeight;

    $modal.style.marginTop = (screenHeight - modalHeight) / 2;
}