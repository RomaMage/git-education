class Task {
    constructor(title, priority, description) {
        this.title = title;
        this.priority = priority;
        this.description = description;
    }
}

function UI(){}

UI.prototype.addTaskToList = function(task){
    const listWrapper = document.querySelector('.task-list-wrapper table tbody');

    const row = document.createElement('tr');
    
    row.innerHTML = `<td>${task.title}</td><td>${task.priority}</td><td>${task.description}</td>`;

    listWrapper.append(row);
}

document.querySelector('.task-form').addEventListener('submit', function(e){
    const title = document.getElementById('task-title').value;
    const priority = document.getElementById('task-priority').value;
    const description = document.getElementById('task-description').value;

    const task = new Task(title, priority, description);

    const ui = new UI();

    ui.addTaskToList(task);

    e.preventDefault();
});