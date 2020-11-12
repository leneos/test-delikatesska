import { useLocalStore } from "mobx-react";
import React from "react";
import { createTodoStore } from "./store";
const TodosContext = React.createContext(null);

export const TodosProvider = ({ children }) => {
  const todosStore = useLocalStore(createTodoStore);
  return (
    <TodosContext.Provider value={todosStore}>{children}</TodosContext.Provider>
  );
};

export const useTodosStore = () => React.useContext(TodosContext);
