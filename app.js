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

    e.preventDefault();
}

//init task list
function initTaskList(taskListWrapper) {
    let list = taskListWrapper.querySelector('ul');
    let clearButton = createInput(button);

    if (!list) {
        taskListWrapper.appendChild(ul);
        list = taskListWrapper.querySelector('ul');
        taskListWrapper.appendChild(button);
        button.innerText = ''
    }

    return list;
}

//create task list
function createTaskList(taskText) {
    let list = initTaskList(taskListWrapper);
    
    return createTask(list, taskText);
}

//add item to task list
function createTask(ul, text) {
    li.innerText = text;
    return ul.appendChild(li);
}