import { useEffect, useState } from 'react';
import Button from "./Button";
import styles from './App.module.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault()
    if(todo === "" ) return;
    setTodos(currentArray => [todo, ...todos])
    setTodo("");
  };
  return (
    <div>
      <h1>My Todo 👀</h1>
      <h5>Total {todos.length} </h5>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" placeholder="todo write"></input>
        <button>save</button>
      </form>
      <hr></hr>
      {todos.map((i, index) => <li key={index}>{i}</li>)}
    </div>
  );
}

export default App;
