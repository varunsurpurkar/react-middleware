import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewToDo from './components/container/NewToDo'
import ListToDo from  './components/container/ListToDo'

function App() {
  return (
    <div className="App">
      <p>Welcome to React Middleware !!</p>
      <NewToDo/>
      <ListToDo/>
    </div>
  );
}

export default App;
