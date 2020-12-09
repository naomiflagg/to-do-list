const createTask = ({ name, details, dueDate, list, priority = low }) => ({
  name,
  details,
  dueDate,
  list,
  priority
});


export default createTask