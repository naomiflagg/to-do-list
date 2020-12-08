import editDom from './editDom'
import getUserInfo from './getUserInput'

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
        let task = getUserInfo(elem.parentNode);
        editDom.addTask(task);
        editDom.toggleDisplay(document.querySelector('.new-task-form'));
        break;
      case elem.classList.contains('checkbox'):
        editDom.toggleStrikethrough(elem.parentNode.parentNode);
        break;
      case elem.classList.contains('delete-task'):
        editDom.removeTask(elem.parentNode);
        break;
    }
  })
};
  

export default getSelectors