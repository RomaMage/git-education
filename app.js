const movie = new Movie('1');
const ui = new UI();
const listWrapper = document.getElementById('movies-list');
const formSubmit = document.getElementById('movies-form');
const list = listWrapper.querySelector('.list-items ul');
const pagination = document.querySelector('.button-holder button');
let current_page;

document.addEventListener('DOMContentLoaded', getMovies);
showMore();

function getMovies(page) {
    movie.getMovies(page)
    .then(results => {
        console.log(results.page);
        if (results.total_results > 0) {
            results.results.forEach((item) => {
                let li = ui.getMovieHtml(item);
                list.append(li);
            });
            list.setAttribute('data-id', results.page);
        }
    })
    .catch(err => console.log(err));
}

function showMore() {
    if (pagination) {
        pagination.addEventListener('click', (e) => {
            console.log(e);
            let page_num = list.getAttribute('data-id');
            getMovies(parseInt(page_num) + 1);
        });
    }
}