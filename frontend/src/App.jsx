import React from 'react'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">My Todo App</h1>
      <div className="todo-wrapper">
        <CreateTodo />
        <Todo></Todo>
      </div>
    </div>
  )
}

export default App
