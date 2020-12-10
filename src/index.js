import editDom from "./editDom";
import taskData from "./taskData";
import listData from "./listData";

refresh();

const eventListeners = (() => {
  let targetTask;
  document.addEventListener("click", (e) => {
    const elem = e.target;
    switch (true) {
      case elem.classList.contains("drop-down"):
        editDom.toggleDisplay(elem.lastElementChild);
        break;
      case elem.classList.contains("fa-caret-down"):
        editDom.toggleDisplay(elem.nextElementSibling);
        break;
      case elem.classList.contains("new-task"):
        editDom.toggleDisplay(document.querySelector(".submit-task"));
        editDom.toggleDisplay(document.querySelector(".new-task-form"));
        break;
      case elem.classList.contains("new-list"):
        editDom.toggleDisplay(document.querySelector(".new-list-form"));
        break;
      case elem.classList.contains("submit-task-edit"):
        e.preventDefault();
        const editTaskForm = document.querySelector(".new-task-form");
        const editedTask = taskData.getInput(editTaskForm);
        const editList = editedTask.list;
        if (!listData.listExists(editList)) {
          listData.addList(editList);
          editDom.addList(editList);
        }
        if (taskData.tasks.includes(targetTask)) {
          const replaceIndex = taskData.replaceTask(targetTask, editedTask);
          editDom.replaceTask(replaceIndex, editedTask);
        } else {
          taskData.addTask(editedTask);
          editDom.addTask(editedTask);
        }
        editTaskForm.reset();
        populateStorage();
        editDom.toggleDisplay(editTaskForm);
        editDom.toggleDisplay(elem);
        break;
      case elem.classList.contains("submit-task"):
        e.preventDefault();
        const taskForm = document.querySelector(".new-task-form");
        targetTask = taskData.getInput(taskForm);
        const list = targetTask.list;
        if (!listData.listExists(list)) {
          listData.addList(list);
          editDom.addList(list);
        }
        taskData.addTask(targetTask);
        populateStorage();
        editDom.addTask(targetTask);
        taskForm.reset();
        editDom.toggleDisplay(taskForm);
        editDom.toggleDisplay(elem);
        break;
      case elem.classList.contains("submit-list"):
        e.preventDefault();
        const listForm = document.querySelector(".new-list-form");
        const newList = listData.getInput(listForm);
        if (!listData.listExists(newList)) {
          listData.addList(newList);
          editDom.addList(newList);
        }
        listForm.reset();
        editDom.toggleDisplay(listForm);
        break;
      case elem.classList.contains("checkbox"):
        editDom.toggleStrikethrough(elem.parentNode.parentNode);
        break;
      case elem.classList.contains("task-name"):
        const modal = document.querySelector(".task-modal");
        targetTask = taskData.getTask(elem.parentNode);
        editDom.populateModal(targetTask);
        editDom.toggleDisplay(modal);
        break;
      case elem.classList.contains("close"):
        const modalClose = document.querySelector(".task-modal");
        editDom.toggleDisplay(modalClose);
        break;
      case elem.classList.contains("delete-task"):
        const deletableTask = elem.parentNode.parentNode;
        taskData.removeTask(deletableTask);
        populateStorage();
        editDom.removeTask(deletableTask);
        break;
      case elem.classList.contains("edit-task"):
        editDom.toggleDisplay(document.querySelector(".submit-task-edit"));
        editDom.toggleDisplay(document.querySelector(".new-task-form"));
        targetTask = taskData.getTask(elem.parentNode.parentNode);
        editDom.populateForm(targetTask);
        break;
      case elem.classList.contains("all"):
        editDom.displayAll();
        editDom.changeHeading("All tasks");
        break;
      case elem.classList.contains("high-tasks"):
        editDom.displayOnly("high");
        editDom.changeHeading("High priority tasks");
        break;
      case elem.classList.contains("low-tasks"):
        editDom.displayOnly("low");
        editDom.changeHeading("Low priority tasks");
        break;
      case elem.classList.contains("medium-tasks"):
        editDom.displayOnly("medium");
        editDom.changeHeading("Medium priority tasks");
        break;
      case elem.classList.contains("today"):
        const today = new Date().toISOString().slice(0, 10);
        editDom.filterDates(today);
        editDom.changeHeading("Today");
        break;
      case elem.classList.contains("list"):
        const selectedList = elem.textContent;
        editDom.filterLists(selectedList);
        editDom.changeHeading(selectedList);
        break;
    }
  });
})();

function populateStorage() {
  localStorage.setItem("tasks", JSON.stringify(taskData.tasks));
}

function getStorage() {
  return JSON.parse(localStorage.getItem("tasks"));
}

function refresh() {
  if (!localStorage.getItem("tasks")) {
    taskData.tasks = [];
  } else {
    taskData.tasks = getStorage();
    taskData.tasks.forEach((task) => {
      editDom.addTask(task);
      const list = task.list;
      if (!listData.listExists(list)) {
        listData.addList(list);
        editDom.addList(list);
      }
    });
  }
}

// To do:
// - edit list functionality
// - split event listeners into functions
