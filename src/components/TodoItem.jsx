import Styles from "./TodoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  return (
    <div className={Styles.Item}>
      <div className={Styles.ItemName}>
        Task: {item}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={Styles.DeleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr />
    </div>
  );
}
