class Task {
    constructor(title, priority, description) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        
    }
}

function UI(){}

UI.prototype.addTaskToList = function(task){
    const listWrapper = document.querySelector('.task-list-wrapper table');

    const li = document.createElement('li');
    
    li.innerHtml = `${task.title} ${task.priority} $`;
}

document.querySelector('.task-form').addEventListener('submit', function(e){
    const title = document.getElementById('task-title');
    const priority = document.getElementById('task-priority');
    const description = document.getElementById('task-description');

    const task = new Task(title, priority, description);

    const ui = new UI();

    ui.addTaskToList(task);

    e.preventDefault();
});