//Define variable

const form = document.querySelector('.task-form');
const taskField = document.querySelector('#task_name');
const taskListWrapper = document.querySelector('.task-list-wrapper');
let checkList = checkTasksList();

if (checkList[1]) {
    initHtmlList();
}
form.addEventListener('submit', addTask);

//check if input value not empty and add task
function addTask(e) {
    e.preventDefault();
    let taskText = '';
    let list = JSON.parse(localStorage.getItem('taskList'));

    if (taskField.value === '') {
        alert('Please Add Task');
    } else {
        index = (list !== null) ? list.length : 0;
        taskText = taskField.value;
        addToTasks(taskText);
        addHtmlListItem(index, taskText);
    }
}

// Add to Local Storage
function addToTasks(text) {
    let list = new Array();
    let checkList = checkTasksList();
    if (checkList[1]) {
        list = JSON.parse(localStorage.getItem('taskList'));
    }

    list.splice(list.length, 0, text);
    return localStorage.setItem('taskList', JSON.stringify(list));
}
// Init Html List
function initHtmlList() {
    const ul = document.createElement('ul');
    ul.className = 'task-list';
    taskListWrapper.appendChild(ul);
    if (checkList[1]) {
        let list = JSON.parse(localStorage.getItem('taskList'));
        list.forEach(function(item, index){
            addHtmlListItem(index, item);
        });
    }

    return taskListWrapper.querySelector('ul');
}

function addHtmlListItem(index, text) {
    if (text === 'undefined') return;
    let list;
    list = (taskListWrapper.querySelector('ul')) ? taskListWrapper.querySelector('ul') : initHtmlList();
    li = document.createElement('li');
    li.className = 'row-item';
    li.setAttribute('data-id', index);
    li.innerText = text;
    a = document.createElement('a');
    a.setAttribute('href', '#');
    a.innerText = 'x';
    a.className = 'remove-item';
    li.appendChild(a);
    list.appendChild(li);
    if (!taskListWrapper.querySelector('input[type="button"]')) addClearTasksButton();

    let removeItems = taskListWrapper.querySelectorAll('.remove-item');
    if (removeItems) {
        removeItems.forEach(function(element){
            element.addEventListener('click', removeItem);
        });
    }
}

function addClearTasksButton() {
    const button = document.createElement('input');

    button.className = 'remove-tasks';
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Clear Tasks');
    button.addEventListener('click', clearAllTasks);

    return taskListWrapper.appendChild(button);
}

function removeItem(event) {
    let clickedLink = event.target;
    let parentItem = clickedLink.parentNode;
    parentItem.parentNode.removeChild(parentItem);
    let list = JSON.parse(localStorage.getItem('taskList'));
    if (list) {
        list.splice(parentItem.dataset.id, 1);
    }
    localStorage.setItem('taskList', JSON.stringify(list));
}

function clearAllTasks() {
    localStorage.clear();
    taskListWrapper.innerHTML = '';
}

// Check function with error text
function checkTasksList() {
    let taskListErrors = new Array();
    switch (true) {
        case JSON.parse(localStorage.getItem('taskList') === null):
            taskListErrors = {0 : "task list empty"};
            break;
        case JSON.parse(localStorage.getItem('taskList') !== null):
            taskListErrors = {1 : "task list full"};
            break;
        default: 
            taskListErrors = {2 : "other errors"};
    }
    return taskListErrors;
}