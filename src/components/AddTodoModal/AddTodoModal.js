import React from "react";
import { useTodosStore } from "../../mobx/TodosContext";
import { AddTodoForm } from "../AddTodoForm/AddTodoForm";
import "./AddTodoModal.scss";
export const AddTodoModal = () => {
  const todosStore = useTodosStore();
  return (
    <div className="AddTodoModal">
      <AddTodoForm />
      <button className="close-btn" onClick={() => todosStore.toggleModal()}>
        Close modal
      </button>
    </div>
  );
};
