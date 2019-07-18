//Define variable

const form = document.querySelector('.task-form');
const taskField = document.querySelector('#task_name');
const taskListWrapper = document.querySelector('.task-list-wrapper');

//add eventlistener
form.addEventListener('submit', addTask);

function addTask(e) {
    if (taskField.value === '') {
        alert('please add Task');
    } else {
        let taskText = taskField.value;

        createTaskList(taskText);
    }

    e.preventDefault();
}

function createTaskList(taskText) {
    const ul = taskListWrapper.querySelector('ul');

    if (!ul) {
        const ul = taskListWrapper.createElement('ul');
    } else {
        createTask(ul, taskText);
    }
}

function createTask(ul, text) {
    const li = ul.createElement('li');
    li.innerText = text;

    return ul.appendChild(li);
}