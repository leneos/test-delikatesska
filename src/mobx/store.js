import { nanoid } from "nanoid";

export const createTodoStore = () => {
  return {
    todos: JSON.parse(localStorage.getItem("todos")) || [],

    isModalOpened: false,
    addTodo(text) {
      this.todos.push({ text, id: nanoid(), done: false });
      this.updateLS();
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
      this.updateLS();
    },
    toggleTodoStatus(todo) {
      todo.done = !todo.done;
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
