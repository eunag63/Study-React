import { useState, useRef } from 'react';
import './App.css';
import Diany from './Diany';
import List from './List';


// const list = [
//   {
//     id: 1,
//     author: "TEST",
//     content: "hi",
//     emotion: 5,
//     createdAt: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: "ALL",
//     content: "hi",
//     emotion: 1,
//     createdAt: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: "MOLAN",
//     content: "hi",
//     emotion: 3,
//     createdAt: new Date().getTime()
//   }

// ]

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0)
  const onCreate = (author, content, emotion) => {
    const createdAt = new Date().getTime();
    const newItem = {
      author, content, emotion, createdAt, id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data])
  }
  return (
    <div className="App">
      <h1>일기장</h1>
      <Diany onCreate={onCreate}></Diany>
      <List list={data}></List>
    </div>
  );
}

export default App;
