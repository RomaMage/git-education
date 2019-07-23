//Define variable

const form = document.querySelector('.task-form');
const taskField = document.querySelector('#task_name');
const taskListWrapper = document.querySelector('.task-list-wrapper');
const ul = document.createElement('ul');
const input = document.createElement('input');
let li;
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
    e.preventDefault();

    let taskText;

    if (taskField.value === '') {
        alert('please add Task');
    } else {
        taskText = taskField.value;
        addToStorage(taskText);
        renderTaskList();
    }

    clearButton = taskListWrapper.querySelector('input');
    clear.addEventListener('click', clearTask);
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
    button = createInput(input, 'submit', 'Clear Task');
    taskListWrapper.appendChild(button);
    listArray.forEach(function(e){
        li = document.createElement('li');
        li.innerText = e;
        list.appendChild(li);
    });
}

//clear all tasks
function clearTask() {
    localStorage.clear();
}