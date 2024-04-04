import { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const initState = [
  {
    id: 1,
    text: "리액트의 기초 알아보기",
    checked: true,
  },
  {
    id: 2,
    text: "컴포넌트의 이해",
    checked: false,
  },
  {
    id: 3,
    text: "할 일 앱 만들어 보기",
    checked: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initState);

  // id는 고유한 값이어야 한다.
  const nextId = useRef(4);

  // todos 배열에 새 객체 추가
  const onInsert = text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
