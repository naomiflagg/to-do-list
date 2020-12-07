const editDom = (() => {
  return {
    toggleDisplay(element) {
    element.classList.toggle('no-display');
    }
  }
})();

const getSelectors = () => {
  const classes = ['.drop-down', '.new-task', '.new-list'];
  classes.forEach((selector) => {
    iterateSelectors(selector)
  })
}
  
function iterateSelectors(selector) {
  document.querySelectorAll(selector).forEach((elem) => {
    createEventListeners(elem)
  }) 
}

function createEventListeners(elem) {
  elem.addEventListener('click', () => {
    editDom.toggleDisplay(setTarget(elem));
  })
}

function setTarget(elem) {
  switch (true) {
    case elem.classList.contains('drop-down'):
      return elem.lastElementChild;
    case elem.classList.contains('new-task'):
      return document.querySelector('.new-task-form');
    case elem.classList.contains('new-list'):
      return document.querySelector('.new-list-form');
  }
}

export default getSelectors