import { useObserver } from "mobx-react";
import React from "react";
import { useTodosStore } from "../../mobx/TodosContext";
import { Todo } from "../Todo/Todo";
import "./TodoList.scss";
export const TodoList = () => {
  const todosStore = useTodosStore();

  return useObserver(() => (
    <ul className="TodoList">
      {todosStore.todos.map((todo) => (
        <Todo
          isDone={todo.done}
          delete={() => todosStore.deleteTodo(todo.id)}
          toggleStatus={() => todosStore.toggleTodoStatus(todo)}
          key={todo.id}
          text={todo.text}
        />
      ))}
    </ul>
  ));
};
