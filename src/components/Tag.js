import {RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from "react-icons/fa";
import styles from './Tag.module.css'


function Tag({ thisTaxt, deleteTodo, toogleTodo}) {
  return (
    <div className={`${styles.todo} ${thisTaxt.isCompleted ? styles.completedTodo : '' }`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{thisTaxt.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(thisTaxt.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toogleTodo(thisTaxt.id)}
      />
    </div>
  );
}

export default Tag