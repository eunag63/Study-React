import './App.css';
import Diany from './Diany';
import List from './List';


const list = [
  {
    id: 1,
    author: "TEST",
    content: "hi",
    emotion: 5,
    createdAt: new Date().getTime()
  },
  {
    id: 2,
    author: "ALL",
    content: "hi",
    emotion: 1,
    createdAt: new Date().getTime()
  },
  {
    id: 3,
    author: "MOLAN",
    content: "hi",
    emotion: 3,
    createdAt: new Date().getTime()
  }

]

function App() {
  return (
    <div className="App">
      <h1>일기장</h1>
      <Diany></Diany>
      <List list={list}></List>
    </div>
  );
}

export default App;
