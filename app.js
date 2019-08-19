const movie = new Movie('1');
const ui = new UI();

const listWrapper = document.getElementById('movies-list');

const formSubmit = document.getElementById('movies-form');

document.addEventListener('DOMContentLoaded', getMovies);

// formSubmit.addEventListener('submit',  (e) => {
//     e.preventDefault();
//     let listId = document.getElementById('movies-form').querySelector('input').value;

//     if (listId === '') {
//         alert('Please Select Movies list');
//         return;
//     }
//     movie.changeList(listId);

//     getMovies();
// });

function getMovies() {
    movie.getMovies()
    .then(results => {
        console.log(results);
        if (results.total_results > 0) {
            if (listWrapper.querySelector('.list-items')) {
                listWrapper.querySelector('.list-information').remove();
            }

            // listWrapper.insertAdjacentHTML('beforeend', ui.getListInfo(results));
            results.results.forEach((item) => {
                listWrapper.querySelector('.list-items ul').append(ui.getMovieHtml(item));
            });
        }

    })
    .catch(err => console.log(err)); 

}