import editDom from './editDom'
import taskData from './taskData'
import listData from './listData'

//turn each response into function in separate module?


const getSelectors = () => {
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
        editDom.toggleDisplay(document.querySelector('.new-task-form'));
        break;
      case elem.classList.contains('new-list'):
        editDom.toggleDisplay(document.querySelector('.new-list-form'));
        break;
      case elem.classList.contains('submit-task'):
        e.preventDefault();
        const taskForm = document.querySelector('.new-task-form');
        const newTask = taskData.getInput(taskForm);
        const list = newTask.list
        if (!listData.listExists(list)) {
          listData.addList(list);
          editDom.addList(list)
        };
        taskData.addTask(newTask);
        editDom.addTask(newTask);
        taskForm.reset();
        editDom.toggleDisplay(taskForm);
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
        const deletableTask = elem.parentNode;
        taskData.removeTask(deletableTask);
        editDom.removeTask(deletableTask);
        break;
      case elem.classList.contains('edit-task'):
        const editableTask = elem.parentNode;
        taskData.getInput(editableTask);
    }
  })
};
  

export default getSelectors