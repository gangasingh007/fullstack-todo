import React from 'react'
import './CreateTodo.css'

const CreateTodo = () => {
  return (
    <div className="todo-container">
      <input
        type="text"
        className="todo-input"
        placeholder="Enter the title of the todo"
      />
      <input
        type="text"
        className="todo-input"
        placeholder="Enter the description of the todo"
      />
      <button className="todo-button">Add a todo</button>
    </div>
  )
}

export default CreateTodo
