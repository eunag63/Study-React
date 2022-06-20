import { useState, useRef } from 'react';
import './App.css';
import Diany from './Diany';
import List from './List';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import H from './pages/H';
import N from './pages/N';
import E from './pages/E';
import D from './pages/D'

import Test from './com/Test';

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
  const onDelete = (targetId) => {
    const newList = data.filter((it) => it.id !== targetId);
    setData(newList)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<H></H>}></Route>
          <Route path='/n' element={<N></N>}></Route>
          <Route path='/e' element={<E></E>}></Route>
          <Route path='/d/:id' element={<D></D>}></Route>
        </Routes>
        <Test></Test>
        <h1>일기장</h1>
        <Diany onCreate={onCreate}></Diany>
        <List list={data} onDelete={onDelete}></List>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
