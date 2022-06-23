import React, { useState, useRef, useReducer } from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import H from './pages/H';
import N from './pages/N';
import E from './pages/E';
import D from './pages/D'

import Test from './com/Test';
import Button from './com/Button';
import Header from './com/Header'

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case 'init': {
      return action.data;
    }
    case 'crate': {
      const newitem = {
        ...action.data
      };
      newState = [newitem, ...state];
      break;
    }
    case 'remove': {
      newState = state.filter((it) => it.id != action.targetId);
      break;
    }
    case 'edit': {
      newState = state.map((it) => it.id === action.data.id? {...action.data}: it)
      break;
    }
    default:
      return state;
  }
  return newState;
}
export const DContext = React.createContext();
export const DisplayContext = React.createContext();
function App() {
  const [data, dispatch] = useReducer(reducer, [])
  const dataId = useRef(0);
  const onCreate = (date, content, emotion) => {
    dispatch({type: "crate", data: {
      id: dataId.curret,
      date: new Date(date).getTime(),
      content,
      emotion,
    }});
    dataId.current += 1;
  }
  const onRemove = (id) => {
    dispatch({type: "remove", id});
  }
  const onEdit = (id, date, content,emotion) => {
    dispatch({
      type: "edit",
      data: {
        id: id,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    })
  }
  return (
    <DContext.Provider value={data}>
      <DisplayContext.Provider value={{onCreate, onEdit, onRemove}}>
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
          
        </div>
      </BrowserRouter>
      </DisplayContext.Provider>
    </DContext.Provider>
    
  );
}

export default App;
