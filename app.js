//Define variable

const form = document.querySelector('.task-form');
const taskField = document.querySelector('#task_name');
const taskListWrapper = document.querySelector('.task-list-wrapper');
const ul = document.createElement('ul');
const li = document.createElement('li');
const input = document.createElement('input');
let list;

//create input
function createInput(input, type, text) {
    if (!type) return;
    input.setAttribute('type', type);
    if ((type === 'submit' || type === 'button') && text)  {
        input.setAttribute('value', text)
    }
    return input;
}

//add eventlistener
form.addEventListener('submit', addTask);

//add task to list
function addTask(e) {
    let taskText;

    if (taskField.value === '') {
        alert('please add Task');
    } else {
        taskText = taskField.value;
        addToStorage(taskText);
        renderTaskList();
    }
    e.preventDefault();
}

//add to localStorage 
function addToStorage(text) {
    let storageList = localStorage.getItem('taskList');
    let listArray = new Array();
    if (storageList == '') {
        localStorage.setItem('taskList', '');
    } else {
        listArray = JSON.parse(localStorage.getItem('taskList'));    
    }
    listArray[listArray.length] = text;
    return localStorage.setItem('taskList', JSON.stringify(listArray));
}

//render task list
function renderTaskList() {
    if (localStorage.getItem('taskList') == '') return;
    listArray = JSON.parse(localStorage.getItem('taskList'));
    list = taskListWrapper.appendChild(ul);
    listArray.forEach(function(e){
        link = li;
        link.innerText = e;
        list.appendChild(link);
    });
}