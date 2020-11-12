import React from "react";
import { useTodosStore } from "../../mobx/TodosContext";
import "./AddTodoForm.scss";
export const AddTodoForm = () => {
  const [todoText, setTodoText] = React.useState("");
  const todosStore = useTodosStore();

  return (
    <div className="AddTodoForm">
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        maxLength="50"
      />
      <button
        onClick={() => {
          if (todoText.trim()) {
            todosStore.addTodo(todoText);
            setTodoText("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};
