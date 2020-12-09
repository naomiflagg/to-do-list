import createTask from './task'

const taskData = (() => {
  return {
    tasks: [],

    getInput(form) {
      const priority = document.querySelector('input[name="priority"]:checked').value;
      const task = createTask({name: form.elements[0].value, details: form.elements[1].value, dueDate: form.elements[2].value, list: form.elements[3].value, priority})
      return task;
    },

    getIndex(task) {
      return this.tasks.indexOf(task);
    },

    getTask(task) {
      const targetTaskId = task.dataset.value;
      return this.tasks[targetTaskId]; 
    },

    addTask(task) {
      this.tasks.push(task);
    },

    removeTask(task) {
      const id = task.dataset.value;
      this.tasks.splice(id, 1);
    },

    replaceTask(oldTask, newTask) {
      const index = this.getIndex(oldTask);
      this.tasks[index] = newTask;
      return index;
    }
  }
})();

export default taskData