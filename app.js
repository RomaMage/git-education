//Set vertical align for widget

function verticalAlign() {
    let form = document.querySelector('.widget-wrapper');
    let align;

    align = (window.innerHeight - form.offsetHeight) / 2;

    form.setAttribute('style', 'margin: ' + align + ' auto' );
}

verticalAlign();
window.addEventListener('resize', verticalAlign, false);


//Functions
class Profile {
    constructor(firstName, lastName, email, phone, comments) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.comments = comments;
    }
}

class UI {

    // Add item to Html Profile list.
    addProfile(profile) {

        const table = document.querySelector('.profile-list table tbody');
        const tr = document.createElement('tr');

        tr.className = 'table-row';
        tr.innerHTML = `<td>${profile.firstName}</td>
                        <td>${profile.lastName}</td>
                        <td>${profile.email}</td>
                        <td>${profile.phone}</td>
                        <td>${profile.comments}</td>
                        <td><a href="#" class="remove-item">&#9851;</a>`;
        
        table.append(tr);
        this.removeProfile(tr);
    }

    // If LocalStorage profile list not empty on page load - render profile list
    renderProfilesList () {
        if (localStorage.getItem('Profiles') === null) return;
        const list = JSON.parse(localStorage.getItem('Profiles'));

        for (let index in list) {
            this.addProfile(list[index]);
        }
    }

    // Validate data on form submit
    validateData(profile) {
        if (Object.getOwnPropertyNames(profile).length !== 0) {
            for (let key in profile) {
                if (profile[key] === '') {
                    return 'please fill ' + key + ' field';
                }
            }
        }
    }

    removeProfile(item) {
        const storage = new Storage();

        item.querySelector('.remove-item').addEventListener('click', function(e){
            e.target.parentNode.parentNode.remove();
            storage.removeFromStorage(e.target.parentNode.parentNode);
        })
    }
}

class Storage {

    // Add profile to LocalStorage
    addToStorage(profile) {
        let list = new Array();
        if (localStorage.getItem('Profiles') !== null) {
            list = JSON.parse(localStorage.getItem('Profiles'));
        }
        
        list.splice(list.length, 0, profile);

        let storageJson = JSON.stringify(list);

        localStorage.setItem('Profiles', storageJson);
    }

    // remove Item From Storage by profile email
    removeFromStorage(item) {

        if (localStorage.getItem('Profiles') === null) return;
        let list = JSON.parse(localStorage.getItem('Profiles'));

        let i = 0;
        console.log(list);
        list.forEach(function(profile){
            for (let index in profile) {
                if (index === 'email') {
                    if (profile[index] === item.children[2].innerText) {
                        list.splice(i, 1);
                    }
                }
            }
            i++;
        });
        console.log(list);
        localStorage.setItem('Profiles', JSON.stringify(list));
    }

    // Clear storage after button click
    clearStorage = () => localStorage.clear();
}

const ui = new UI();
const storage = new Storage();

ui.renderProfilesList();

// Add Event Listener to form submit.
document.querySelector('.adding-form').addEventListener('submit', function(e){
    e.preventDefault();

    const form = document.querySelector('form.adding-form');
    const firstName = form.querySelector('#first_name').value;
    const lastName = form.querySelector('#last_name').value;
    const email = form.querySelector('#email').value;
    const phone = form.querySelector('#phone').value;
    const comments = form.querySelector('#comments').value;

    const profile = new Profile(firstName, lastName, email, phone, comments);

    if (ui.validateData(profile) !== undefined) {
        alert(ui.validateData(profile));
        return;
    }

    ui.addProfile(profile);
    storage.addToStorage(profile);

});

// Add Event Listener to Clear Profiles button
document.querySelector('.adding-form .row-item.buttons button').addEventListener('click', function(e){
    e.preventDefault();

    storage.clearStorage();
    
    list = document.querySelectorAll('.profile-list .table-row');
    list.forEach(function(item){
        item.remove();
    });
});