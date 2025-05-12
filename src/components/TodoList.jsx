import TodoItem from "./TodoItem";
import Style from "./TodoList.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={Style.List}>
      {todos.map((item, index) => (
        <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
      ))}
      {console.log(todos)}
    </div>
  );
}
