import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.flexcontainer}>
        <input
          className={styles.input}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Add a new task"
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
