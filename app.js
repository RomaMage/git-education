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
    addProfile(profile) {

        if (this.validateData(profile) !== '') {
            alert(this.validateData(profile));
            return;
        };

        const table = document.querySelector('.profile-list table tbody');
        const tr = document.createElement('tr');

        tr.innerHTML = `<td>${profile.firstName}</td>
                        <td>${profile.lastName}</td>
                        <td>${profile.email}</td>
                        <td>${profile.phone}</td>
                        <td>${profile.comments}</td>`;
        
        table.append(tr);
    }

    validateData(profile) {
        if (Object.getOwnPropertyNames(profile).length !== 0) {
            
            for (let key in profile) {
                if (profile[key] === '') {
                    console.log();
                    return 'please fill ' + key + ' field';
                }
            }
        }
    }
}

class Storage {

    initStorage() {
        const list = new Array();
        localStorage.setItem('Profiles', list);
    }

    addToStorage(profile) {
        
    }
}

document.querySelector('.adding-form').addEventListener('submit', function(e){
    e.preventDefault();

    const form = document.querySelector('form.adding-form');
    const firstName = form.querySelector('#first_name').value;
    const lastName = form.querySelector('#last_name').value;
    const email = form.querySelector('#email').value;
    const phone = form.querySelector('#phone').value;
    const comments = form.querySelector('#comments').value;

    const profile = new Profile(firstName, lastName, email, phone, comments);
    const ui = new UI();
    const storage = new Storage();

    ui.addProfile(profile);
});