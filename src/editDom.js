import taskData from "./taskData";
import listData from "./listData";

const editDom = (() => {
  return {
    toggleDisplay(element) {
      element.classList.toggle("no-display");
    },

    removeDisplay(element) {
      element.classList.add("no-display");
    },

    displayAll() {
      const tasks = document.querySelectorAll(".task");
      tasks.forEach((task) => {
        task.classList.remove("no-display");
      });
    },

    displayOnly(className) {
      const tasks = document.querySelectorAll(".task");
      tasks.forEach((task) => {
        if (task.classList.contains(className)) {
          task.classList.remove("no-display");
        } else {
          this.removeDisplay(task);
        }
      });
    },

    filterDates(date) {
      const tasks = document.querySelectorAll(".task");
      tasks.forEach((task) => {
        if (task.childNodes[2].textContent === date) {
          task.classList.remove("no-display");
        } else {
          this.removeDisplay(task);
        }
      });
    },

    filterLists(list) {
      const tasks = document.querySelectorAll(".task");
      tasks.forEach((task) => {
        const taskObj = taskData.getTask(task);
        if (taskObj.list === list) {
          task.classList.remove("no-display");
        } else {
          this.removeDisplay(task);
        }
      });
    },

    changeHeading(text) {
      const h1 = document.querySelector("h1");
      h1.textContent = text;
    },

    toggleStrikethrough(element) {
      element.classList.toggle("strikethrough");
    },

    addTask(task) {
      const newTask = document.createElement("tr");

      const tableRow = (() => {
        const taskList = document.querySelector(".tasks");
        const taskId = taskData.getIndex(task);
        if (taskId === 0) {
          this.toggleDisplay(document.querySelector(".table-hdrs"));
          this.toggleDisplay(document.querySelector("h1"));
        }
        taskList.appendChild(newTask);
        newTask.classList.add(task.priority, "task");
        newTask.dataset.value = taskId;
      })();

      const checkboxCol = (() => {
        const checkWrap = document.createElement("td");
        const input = document.createElement("input");
        newTask.appendChild(checkWrap);
        checkWrap.appendChild(input);
        input.setAttribute("type", "checkbox");
        input.classList.add("checkbox");
      })();

      const taskCol = (() => {
        const taskName = document.createElement("td");
        newTask.appendChild(taskName);
        taskName.textContent = task.name;
        taskName.classList.add("task-name");
      })();

      const dateCol = (() => {
        const date = document.createElement("td");
        newTask.appendChild(date);
        date.textContent = task.dueDate;
      })();

      const editCol = (() => {
        const editWrap = document.createElement("td");
        const edit = document.createElement("i");
        newTask.appendChild(editWrap);
        editWrap.appendChild(edit);
        edit.classList.add("fas", "fa-edit", "edit-task");
      })();

      const deleteCol = (() => {
        const exWrap = document.createElement("td");
        const ex = document.createElement("i");
        newTask.appendChild(exWrap);
        exWrap.appendChild(ex);
        ex.classList.add("fas", "fa-trash-alt", "delete-task");
      })();
    },

    addList(list) {
      const option = document.createElement("option");
      const selectList = document.querySelector("#select-list");
      option.textContent = list;
      const selectList2 = document.querySelector("#select-list2");
      const option2 = document.createElement("option");
      option2.textContent = list;
      selectList.appendChild(option);
      selectList2.appendChild(option2);

      const listListItem = document.createElement("li");
      const listList = document.querySelector(".lists");
      listList.appendChild(listListItem);
      listListItem.textContent = list;
      listListItem.classList.add("list");
    },

    removeTask(task) {
      task.remove();
      this.recalibrateIndex();
    },

    recalibrateIndex() {
      const tasks = document.querySelectorAll(".task");
      if (tasks.length > 0) {
        let counter = 0;
        tasks.forEach((task) => {
          task.dataset.value = counter;
          counter++;
        });
      } else {
        this.toggleDisplay(document.querySelector(".table-hdrs"));
        this.toggleDisplay(document.querySelector("h1"));
      }
    },

    populateModal(task) {
      document.querySelector(".task-name-modal").textContent = task.name;
      document.querySelector(".details-modal").textContent = task.details;
      document.querySelector(".due-date-modal").textContent = task.dueDate;
      document.querySelector(".list-modal").textContent = task.list;
      document.querySelector(".priority-modal").textContent = task.priority;
    },

    populateForm(task) {
      const editTaskForm = document.querySelector(".new-task-form");
      let counter = 0;
      for (const property in task) {
        editTaskForm.elements[counter].value = task[property];
        counter++;
      }
    },

    replaceTask(index, newTask) {
      const oldListing = document.querySelector(`[data-value="${index}"]`);
      const oldName = oldListing.childNodes[1];
      const oldDate = oldListing.childNodes[2];
      oldName.textContent = newTask.name;
      oldDate.textContent = newTask.dueDate;
    },
  };
})();

export default editDom;
