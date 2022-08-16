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
  // 영화 앱
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json()
    setMovies(json.data.movies)
    setLoading(false)
  }
  useEffect(() => {
   getMovies()
  }, [])
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div>{movies.map(movie => <div key={movie.id}>{movie.title}</div>)}</div>}
      <hr></hr>
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
