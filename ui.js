class UI {

    searchMovie(search) {
        const list = document.querySelectorAll('.list-items ul.list li.list-item');
        
        if (search.length > 0) {
            list.forEach((item) => {
                if (item.querySelector('.info-hldr h4').innerHTML.indexOf(search) === -1) {
                    item.className = 'invisible';
                }
            });
        }
    }

    showModal () {
        modal.style.display = 'block';
        this.hideModal();
    }

    modalPosition() {
        let screenHeight = window.innerHeight;
        let $modal = document.querySelector('.movie-card');
        let modalHeight = $modal.offsetHeight;
    
        $modal.style.marginTop = (screenHeight - modalHeight) / 2;
    }

    hideModal () {
        modal.addEventListener('click', (e) => {
            if (e.target.id !== 'undefined' && (e.target.id == 'modal' || e.target.id == 'close-button')) {
                modal.style.display = 'none';
            }
        });
    }
    
}