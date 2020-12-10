const listData = (() => {
  return {
    lists: [],

    getInput(form) {
      const list = form.elements[0].value;
      return list;
    },

    addList(list) {
      this.lists.push(list);
    },

    listExists(list) {
      if (this.lists.includes(list) || list === "") {
        return true;
      }
    },
  };
})();

export default listData;
