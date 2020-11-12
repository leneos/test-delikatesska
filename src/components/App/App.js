import { useObserver } from "mobx-react";
import "./App.scss";
import { TodoList } from "../TodoList/TodoList";
import { DateHeader } from "../DateHeader/DateHeader";
import { OpenModal } from "../OpenModal/OpenModal";
import { AddTodoModal } from "../AddTodoModal/AddTodoModal";
import { useTodosStore } from "../../mobx/TodosContext";
function App() {
  const todosStore = useTodosStore();

  return useObserver(() => (
    <div className="App">
      <DateHeader />
      {todosStore.todos.length > 0 && <TodoList />}
      {!todosStore.isModalOpened && <OpenModal />}
      {todosStore.isModalOpened && <AddTodoModal />}
    </div>
  ));
}

export default App;
