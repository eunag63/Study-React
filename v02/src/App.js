import { useState, useRef } from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import H from './pages/H';
import N from './pages/N';
import E from './pages/E';
import D from './pages/D'

import Test from './com/Test';
import Button from './com/Button';
import Header from './com/Header'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header text={"앱이라고"} left={<Button text={'왼쪽버튼'} onClick={()=>alert("왼쪽클릭")}></Button>} right={<Button text={'오른쪽버튼'} onClick={()=>alert("오른쪽클릭")}></Button>}></Header>
        <Button text={'버튼'} onClick={()=>alert("버튼클릭")} type={"positive"}></Button>
        <Button text={'버튼'} onClick={()=>alert("버튼클릭")} type={"negative"}></Button>
        <Button text={'버튼'} onClick={()=>alert("버튼클릭")} type={""}></Button>        
        <Routes>
          <Route path='/' element={<H></H>}></Route>
          <Route path='/n' element={<N></N>}></Route>
          <Route path='/e' element={<E></E>}></Route>
          <Route path='/d/:id' element={<D></D>}></Route>
        </Routes>
        <Test></Test>
        <h1>일기장</h1>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
