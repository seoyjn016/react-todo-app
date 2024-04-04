import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
