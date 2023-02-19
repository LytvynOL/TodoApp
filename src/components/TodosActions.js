import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import Button from "./UI/Button"

function TodosActions({ resetTodos, deleteComplatedTodo, completedTodoExist }) {
  return (
    <>
      <Button tittle="Reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button tittle="Clear Completed Todods" onClick={deleteComplatedTodo} disabled={!completedTodoExist}>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions