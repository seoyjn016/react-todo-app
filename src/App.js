import { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import { MdAdd } from "react-icons/md";
import TodoInsert from "./components/Todoinsert";
import TodoListItem from "./components/TodoListItem";
import TodoList from "./components/TodoList";
function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
