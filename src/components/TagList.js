import Tag from "./Tag";
import styles from "./TagList.module.css"

function TagList({ list, deleteTodo, toogleTodo}) {
  return (
    <div className={styles.todoListContainer}>
      {!list.length && <h2>Todo is empty</h2>}
      {list.map((thisTaxt) => (
        <Tag key={thisTaxt.id} thisTaxt={thisTaxt} deleteTodo={deleteTodo} toogleTodo={toogleTodo} />
      ))}
    </div>
  );
}

export default TagList