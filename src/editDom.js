import taskData from './taskData'

const editDom = (() => {  
  return {
    toggleDisplay(element) {
    element.classList.toggle('no-display');
    },

    toggleStrikethrough(element) {
      element.classList.toggle('strikethrough');
    },

    addTask(task) {
      let taskList = document.querySelector('.tasks');
      let newTask = document.createElement('tr');
      let checkWrap = document.createElement('td');
      let input = document.createElement('input');
      let taskName = document.createElement('td');
      let date = document.createElement('td');
      let ex = document.createElement('td');
      let edit = document.createElement('td');
      taskList.appendChild(newTask);
      newTask.appendChild(checkWrap);
      checkWrap.appendChild(input);
      newTask.appendChild(taskName);
      newTask.appendChild(date);
      newTask.appendChild(edit);
      newTask.appendChild(ex);
      let id = taskData.getIndex(task);
      newTask.dataset.value = id;
      newTask.classList.add('task')
      input.setAttribute('type', 'checkbox');
      input.classList.add('checkbox');
      taskName.textContent = task.name;
      date.textContent = task.dueDate;
      ex.textContent = 'Delete';
      edit.textContent = 'Edit';
      edit.classList.add('edit-task');
      ex.classList.add('delete-task');
      newTask.classList.add(task.priority)
    },

    removeTask(task) {
      task.remove();
      this.recalibrateIndex();
    },

    recalibrateIndex() {
      let tasks = document.querySelectorAll('.task');
      let counter = 0;
      tasks.forEach((task) => {
        task.dataset.value = counter;
        counter ++;
      })
    }
  }
})();

export default editDom