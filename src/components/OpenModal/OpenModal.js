import { useObserver } from "mobx-react";
import React from "react";
import { useTodosStore } from "../../mobx/TodosContext";
import "./OpenModal.scss";
export const OpenModal = (props) => {
  const todosStore = useTodosStore();
  return useObserver(() => (
    <button className="OpenModal" onClick={() => todosStore.toggleModal()}>
      +
    </button>
  ));
};
