const editDom = (() => {
  const tasks = [];
  
  return {
    toggleDisplay(element) {
    element.classList.toggle('no-display');
    },

    toggleStrikethrough(element) {
      element.classList.toggle('strikethrough');
    },

    addTask(task) {
      tasks.push(task)
      let taskList = document.querySelector('.tasks');
      let newTask = document.createElement('tr');
      let checkWrap = document.createElement('td');
      let input = document.createElement('input');
      let label = document.createElement('label');
      let date = document.createElement('td');
      let ex = document.createElement('td');
      let edit = document.createElement('td');
      taskList.appendChild(newTask);
      newTask.appendChild(checkWrap);
      checkWrap.appendChild(input);
      checkWrap.appendChild(label);
      newTask.appendChild(date);
      newTask.appendChild(edit);
      newTask.appendChild(ex);
      let id = tasks.indexOf(task);
      newTask.setAttribute('class', id)
      input.setAttribute('type', 'checkbox');
      input.setAttribute('class', 'checkbox');
      input.setAttribute('id', id)
      label.setAttribute('for', id)
      label.textContent = task.name;
      date.textContent = task.dueDate;
      ex.textContent = 'Delete';
      edit.textContent = 'Edit';
      edit.setAttribute('class', 'edit-task');
      ex.setAttribute('class', 'delete-task');
    },

    removeTask(task) {
      let id = task.classList;
      tasks.splice(id, 1);
      task.remove();
    }
  }
})();

//if i remove tasks, need to update the ids of the index. make sure they're updated

export default editDom