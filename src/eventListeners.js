import editDom from './editDom'
import taskData from './taskData'
import listData from './listData'

//turn each response into function in separate module?


const getSelectors = () => {
  let targetTask;
  document.addEventListener('click', (e) => {
    const elem = e.target
    switch (true) {
      case elem.classList.contains('drop-down'):
        editDom.toggleDisplay(elem.lastElementChild);
        break;
      case elem.classList.contains('fa-caret-down'):
        editDom.toggleDisplay(elem.nextElementSibling);
        break;
      case elem.classList.contains('new-task'):
        editDom.toggleDisplay(document.querySelector('.submit-task'))
        editDom.toggleDisplay(document.querySelector('.new-task-form'));
        break;
      case elem.classList.contains('new-list'):
        editDom.toggleDisplay(document.querySelector('.new-list-form'));
        break;
      case elem.classList.contains('submit-task-edit'):
        e.preventDefault();
        const editTaskForm = document.querySelector('.new-task-form');
        const editedTask = taskData.getInput(editTaskForm);
        const editList = editedTask.list
        if (!listData.listExists(editList)) {
          listData.addList(editList);
          editDom.addList(editList)
        };
        if (taskData.tasks.includes(targetTask)) {
          const replaceIndex = taskData.replaceTask(targetTask, editedTask);
          editDom.replaceTask(replaceIndex, editedTask);
        } else {
          taskData.addTask(editedTask);
          editDom.addTask(editedTask);
        }
        editTaskForm.reset();
        editDom.toggleDisplay(editTaskForm);
        editDom.toggleDisplay(elem);
        break;
      case elem.classList.contains('submit-task'):
        e.preventDefault();
        const taskForm = document.querySelector('.new-task-form');
        targetTask = taskData.getInput(taskForm);
        const list = targetTask.list
        if (!listData.listExists(list)) {
          listData.addList(list);
          editDom.addList(list)
        };
        taskData.addTask(targetTask);
        editDom.addTask(targetTask);
        taskForm.reset();
        editDom.toggleDisplay(taskForm);
        editDom.toggleDisplay(elem);
        break;
      case elem.classList.contains('submit-list'):
        e.preventDefault();
        const listForm = document.querySelector('.new-list-form')
        const newList = listData.getInput(listForm);
        if (!listData.listExists(newList)) {
          listData.addList(newList);
          editDom.addList(newList);
        };
        listForm.reset();
        editDom.toggleDisplay(listForm);
        break;
      case elem.classList.contains('checkbox'):
        editDom.toggleStrikethrough(elem.parentNode.parentNode);
        break;
      case elem.classList.contains('delete-task'):
        const deletableTask = elem.parentNode.parentNode;
        taskData.removeTask(deletableTask);
        editDom.removeTask(deletableTask);
        break;
      case elem.classList.contains('edit-task'):
        editDom.toggleDisplay(document.querySelector('.submit-task-edit'));
        editDom.toggleDisplay(document.querySelector('.new-task-form'));
        targetTask = taskData.getTask(elem.parentNode.parentNode);
        editDom.populateForm(targetTask);
        break;
      case elem.classList.contains('all'):
        editDom.displayAll();
        break;
      case elem.classList.contains('high-tasks'):
        editDom.displayOnly('high');
        break;
      case elem.classList.contains('low-tasks'):
        editDom.displayOnly('low');
        break;
      case elem.classList.contains('medium-tasks'):
        editDom.displayOnly('medium');
        break;
      case elem.classList.contains('today'):
        const today = new Date().toISOString().slice(0, 10);
        editDom.filterDates(today);
        break;
      case elem.classList.contains('list'):
        editDom.filterLists(elem.textContent);
        break;
    }
  })
};
  

export default getSelectors