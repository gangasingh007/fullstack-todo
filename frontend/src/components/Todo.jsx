import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
  const [todos, setTodos] = useState([])

  const fetchTodos = () => {
    fetch('http://localhost:3000/todos')
      .then(async (res) => {
        const json = await res.json()
        setTodos(json.todos)
      })
      .catch((err) => console.error('Error fetching todos:', err))
  }

  const markAsDone = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: true }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="todo-list-container">
      <button className="fetch-button" onClick={fetchTodos}>
        Get All the Todos
      </button>

      {todos.map((todo, index) => (
        <div className="todo-card" key={index}>
          <h3>{`Todo Title: ${todo.title}`}</h3>
          <h5>{`Todo Description: ${todo.description}`}</h5>
          <button
            className="status-button"
            onClick={() => markAsDone(index)}
            disabled={todo.completed}
          >
            {todo.completed ? 'Completed' : 'Mark as done' }
          </button>
        </div>
      ))}
    </div>
  )
}

export default Todo
