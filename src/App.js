import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from './components/Form';
import TagList from './components/TagList';
import TodosActions from './components/TodosActions';

function App() {
 const [list, setList] = useState([])
 
 const handlerList = (text) => {
  const newTodo = {
    text,
    isCompleted:false,
    id:uuidv4(),
  }
    setList([...list, newTodo])
 }

 const removeTodoHendler = (id) => {
    setList(list.filter((todo) => todo.id !== id))
 }

 const toogleTodoHandler = (id) => {
  setList(list.map((todo) => 
    todo.id === id
    ? {...todo, isCompleted: !todo.isCompleted}
    : {...todo}
  ))
 }

 const resetTodosHandler = () => {
  setList([])
 }

 const deleteComplatedTodo = () => {
  setList(list.filter((todo)=> !todo.isCompleted))
 }

 const completedTodoCount = list.filter((todo)=> todo.isCompleted).length

  return (
    <div className="App">
      <h1>My todo list</h1>
      <Form handlerList={handlerList} />
      {!!list.length && <TodosActions
        resetTodos={resetTodosHandler}
        deleteComplatedTodo={deleteComplatedTodo}
        completedTodoExist={!!completedTodoCount}
      />}
      <TagList
        list={list}
        deleteTodo={removeTodoHendler}
        toogleTodo={toogleTodoHandler}
      />
      {completedTodoCount > 0 && <h2>{`You have completed ${completedTodoCount} ${completedTodoCount > 1 ? 'todos' : 'todo'} `}</h2>}
    </div>
  );
}

export default App;
