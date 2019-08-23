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
    }

    
}