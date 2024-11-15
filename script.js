const getTaskInput = document.querySelector('#taskInput');
const getTaskbtn = document.querySelector('#addTaskBtn');
const getTaskList = document.querySelector('#taskList');

function addTask() {
    const getTaskText = getTaskInput.value.trim();

    if (getTaskText === ''){
        alert(`Please enter a valid text`);
    }

    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    listItem.innerHTML = `
        <span>${getTaskText}</span>
        <div>
            <button class="btn btn-success btn-sm mr-2 complete-btn">Complete</button>
            <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
    `;

    listItem.querySelector('.complete-btn').addEventListener('click', ()=> completeTask(listItem));
    listItem.querySelector('.delete-btn').addEventListener('click', ()=> deleteTask(listItem));

    getTaskList.appendChild(listItem);

    getTaskInput.value = '';
}

// To mark task as completed
function completeTask(listItem) {
    listItem.querySelector('span').classList.toggle('text-decoration-line-through');
};

//To delete task
function deleteTask(listItem) {
    getTaskList.removeChild(listItem);
};

// For when add task button is clicked
getTaskbtn.addEventListener('click', addTask);


// For when enter key is pressed
getTaskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});