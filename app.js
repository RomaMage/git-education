//Define variable

const form = document.querySelector('.task-form');
const taskField = document.querySelector('#task_name');
const taskListWrapper = document.querySelector('.task-list-wrapper');
const ul = document.createElement('ul');
const li = document.createElement('li');
const input = document.createElement('input');


//add eventlistener
form.addEventListener('submit', addTask);

//create input
function createInput(input, type, text) {
    if (!type) return;
    input.setAttribute('type', type);
    if ((type === 'submit' || type === 'button') && text)  {
        input.setAttribute('value', text)
    }
    return input;
}

//add task to list
function addTask(e) {
    let taskText;

    if (taskField.value === '') {
        alert('please add Task');
    } else {
        taskText = taskField.value;
        createTaskList(taskText);
    }
    console.log('endEvent');
    e.preventDefault();
}

//init task list
function initTaskList(taskListWrapper) {
    let clearButton = taskListWrapper.querySelector('input[type="submit"]');

    taskListWrapper.appendChild(ul);
    if (!clearButton) {
        clearButton = createInput(input, 'submit', 'Clear Tasks');
        taskListWrapper.appendChild(clearButton);
    }

    return list = taskListWrapper.querySelector('ul');
}

//create task list
function createTaskList(taskText) {
    var list = taskListWrapper.querySelector('ul');
    if (!list) {
        console.log('init');
        list = initTaskList(taskListWrapper);
    }
    
    return createTask(list, taskText);
}

//add item to task list
function createTask(list, text) {
    console.log('create');
    console.log(list);
    li.innerText = text;
    return list.appendChild(li);
}