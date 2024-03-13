// script.js
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
      addTask(taskName);
      taskInput.value = '';
    }
  }
});

function addTask(taskName) {
  const li = document.createElement('li');
  li.textContent = taskName;
  taskList.appendChild(li);
}
