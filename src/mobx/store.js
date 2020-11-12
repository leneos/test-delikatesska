import { nanoid } from "nanoid";

export const createTodoStore = () => {
  return {
    todos:
      JSON.parse(localStorage.getItem("todos")) ||
      localStorage.setItem("todos", "[]"),
    isModalOpened: false,
    addTodo(text) {
      this.todos.push({ text, id: nanoid(), done: false });
      this.updateLS();
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
      this.updateLS();
    },
    toggleTodoStatus(id) {
      let t = this.todos.find((item) => item.id === id);
      t.done = !t.done;
      this.updateLS();
    },
    toggleModal() {
      this.isModalOpened = !this.isModalOpened;
    },
    updateLS() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  };
};
