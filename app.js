const request = new Requests();
const ui = new UI();
const listWrapper = document.getElementById('movies-list');
const formSubmit = document.getElementById('movies-form');
const list = listWrapper.querySelector('.list-items ul');
const pagination = document.querySelector('.button-holder button');
var allGenres = new Array();


document.addEventListener('DOMContentLoaded', getMovies);
showMore();
searchMovie();
getGenres();

function getMovies(page) {
    request.getMovies(page)
    .then(results => {
        console.log(results);
        console.log(allGenres);
        if (results.total_results > 0) {
            results.results.forEach((item) => {
                let movie = new Movie(item, allGenres);
                list.append(movie.getMoviePreviewHtml());
            });
            list.setAttribute('data-id', results.page);
        }
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

    console.log(search);
    searchField.addEventListener('keyup', (e) => {
        ui.searchMovie(searchField.value);
    });
}