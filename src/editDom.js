const editDom = (() => {
  const tasks = [];
  
  return {
    toggleDisplay(element) {
    element.classList.toggle('no-display');
    },

    addTask(task) {
      let newTask = document.createElement('li');
      let taskList = document.querySelector('.tasks');
      tasks.push(task)
      taskList.appendChild(newTask);
      newTask.textContent = task.name
      
    }
  }
})();

export default editDom