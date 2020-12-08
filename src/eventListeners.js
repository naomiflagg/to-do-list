import editDom from './editDom'
import taskData from './taskData'

const getSelectors = () => {
  document.addEventListener('click', (e) => {
    let elem = e.target
    switch (true) {
      case elem.classList.contains('drop-down'):
        editDom.toggleDisplay(elem.lastElementChild);
        break;
      case elem.classList.contains('new-task'):
        editDom.toggleDisplay(document.querySelector('.new-task-form'));
        break;
      case elem.classList.contains('new-list'):
        editDom.toggleDisplay(document.querySelector('.new-list-form'));
        break;
      case elem.classList.contains('submit'):
        e.preventDefault();
        let newTask = taskData.getInput(elem.parentNode);
        taskData.addTask(newTask);
        editDom.addTask(newTask);
        let form = document.querySelector('.new-task-form');
        form.reset();
        editDom.toggleDisplay(form);
        break;
      case elem.classList.contains('checkbox'):
        editDom.toggleStrikethrough(elem.parentNode.parentNode);
        break;
      case elem.classList.contains('delete-task'):
        let deletableTask = elem.parentNode;
        taskData.removeTask(deletableTask);
        editDom.removeTask(deletableTask);
        break;
    }
  })
};
  

export default getSelectors