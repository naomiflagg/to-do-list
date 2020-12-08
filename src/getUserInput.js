import createTask from './task'

const getUserInfo = (form) => {
  const priority = document.querySelector('input[name="priority"]:checked').value;
  const task = createTask({name: form.elements[0].value, details: form.elements[1].value, dueDate: form.elements[2].value, list: form.elements[3].value, priority})
  return task;
}

export default getUserInfo