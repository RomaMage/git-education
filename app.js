//Define variable

const form = document.querySelector('.task-form');
const taskField = document.querySelector('#task_name');
const taskListWrapper = document.querySelector('.task-list-wrapper');
let checkList = checkTasksList();

if (checkList[1]) {
    renderHtmlList();
}
form.addEventListener('submit', addTask);

//check if input value not empty and add task
function addTask(e) {
    e.preventDefault();
    let taskText = '';
    let listIndexes = new Array();
    let list = new Array();

    list = JSON.parse(localStorage.getItem('taskList'));

    if (taskField.value === '') {
        alert('Please Add Task');
    } else {
        if (list && list.keys !== null) {
            listIndexes = list.keys();
        }
        taskText = taskField.value;
        addToTasks(taskText);
        addHtmlListItem(listIndexes[listIndexes.length - 1], taskText);
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
    let checkList = checkTasksList();
    ul.className = 'task-list';
    taskListWrapper.appendChild(ul);

    return taskListWrapper.querySelector('ul');
}

function renderHtmlList() {
    let list = initHtmlList();
    if (checkList[1]) {
        let list = JSON.parse(localStorage.getItem('taskList'));
        list.forEach(function(item, index){
            addHtmlListItem(index, item);
        });
    }
}

function addHtmlListItem(index, text) {
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

    taskListWrapper.addEventListener('click', removeItem(event), false);
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
    console.log(event);
    if (event.target !== event.currentTarget) {
        let parentItem = event.target.parentNode;

        console.log(event);
        parentItem.parentNode.removeChild(parentItem);
        let list = JSON.parse(localStorage.getItem('taskList'));
        if (list) {
            list.splice(parentItem.dataset.id, 1);
        }
        localStorage.setItem('taskList', JSON.stringify(list));
    }
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