import React, { useState } from 'react'
import './CreateTodo.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CreateTodo = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")

  const updateTodo = async () => {
    if (!(title === "" || description=="")){
      try {
        const response = await fetch("http://localhost:3000/todo", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
  
        if (response.ok) {
          toast.success("Todo added!")
          settitle("")         // Clear inputs after success
          setdescription("")
        } else {
          toast.error(" Failed to add todo!")
        }
      } catch (err) {
        toast.error("Something went wrong!")
      } 
    }
    else{
      toast.error("All the Fields Are Required")
    }
  }

  return (
    <div className="todo-container">
      <input
        id="title-input"
        type="text"
        className="todo-input"
        placeholder="Enter the title of the todo"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        id="description-input"
        type="text"
        className="todo-input"
        placeholder="Enter the description of the todo"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button className="todo-button" onClick={updateTodo}>
        Add a todo
      </button>

      {/* Toast container for showing notifications */}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  )
}

export default CreateTodo
