const editDom = (() => {
  const tasks = [];
  
  return {
    toggleDisplay(element) {
    element.classList.toggle('no-display');
    },

    addTask(task) {
      let taskList = document.querySelector('.tasks');
      let newTask = document.createElement('li');
      let input = document.createElement('input');
      let label = document.createElement('label')
      tasks.push(task)
      taskList.appendChild(newTask);
      newTask.appendChild(input);
      newTask.appendChild(label);
      let id = tasks.indexOf(task);
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', id)
      label.setAttribute('for', id)
      label.textContent = task.name;
    }
  }
})();

//if i remove tasks, need to update the ids of the index. make sure they're updated

export default editDom