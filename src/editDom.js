import taskData from './taskData'
import listData from './listData'

const editDom = (() => {  
  return {
    toggleDisplay(element) {
    element.classList.toggle('no-display');
    },

    toggleStrikethrough(element) {
      element.classList.toggle('strikethrough');
    },

    addTask(task) {
      const newTask = document.createElement('tr');
      
      const tableRow = (() => {
        const taskList = document.querySelector('.tasks');
        const id = taskData.getIndex(task);
        if (id === 0) {
          this.toggleDisplay(document.querySelector('.table-hdrs'));
          this.toggleDisplay(document.querySelector('h1'));
        }
        taskList.appendChild(newTask);
        newTask.classList.add(task.priority, 'task');
        newTask.dataset.value = id;
      })();
      
      const checkboxCol = (() => {
        const checkWrap = document.createElement('td');
        const input = document.createElement('input');
        newTask.appendChild(checkWrap);
        checkWrap.appendChild(input);
        input.setAttribute('type', 'checkbox');
        input.classList.add('checkbox');
      })();

      const taskCol = (() => {
        const taskName = document.createElement('td');
        newTask.appendChild(taskName);
        taskName.textContent = task.name;
      })();
      
      const dateCol = (() => {
        const date = document.createElement('td');
        newTask.appendChild(date);
        date.textContent = task.dueDate;
      })();

      const editCol = (() => {
        const editWrap = document.createElement('td');
        const edit = document.createElement('i');
        newTask.appendChild(editWrap);
        editWrap.appendChild(edit)
        edit.classList.add('fas', 'fa-edit', 'edit-task');
      })();
      
      const deleteCol = (() => {
        const exWrap = document.createElement('td');
        const ex = document.createElement('i')
        newTask.appendChild(exWrap);
        exWrap.appendChild(ex);
        ex.classList.add('fas', 'fa-trash-alt', 'delete-task')
      })();
    },

    addList(list) {
      const option = document.createElement('option')
      const selectList = document.querySelector('#select-list');
      option.textContent = list;
      const selectList2 = document.querySelector('#select-list2');
      const option2 = document.createElement('option')
      option2.textContent = list;
      selectList.appendChild(option);
      selectList2.appendChild(option2);

      const listListItem = document.createElement('li');
      const listList = document.querySelector('.lists');
      listList.appendChild(listListItem);
      listListItem.textContent = list;
    },

    removeTask(task) {
      task.remove();
      this.recalibrateIndex();
    },

    recalibrateIndex() {
      let tasks = document.querySelectorAll('.task');
      if (tasks.length > 0) {
        let counter = 0;
        tasks.forEach((task) => {
          task.dataset.value = counter;
          counter ++;
        })
      } else {
        this.toggleDisplay(document.querySelector('.table-hdrs'));
        this.toggleDisplay(document.querySelector('h1'));
      }
    }
  }
})();

export default editDom