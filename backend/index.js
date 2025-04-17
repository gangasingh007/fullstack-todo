const express = require("express");
const { CreateTodo, UpdateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json());

// Create Todo
app.post("/todo", async (req, res) => {
    const todopayload = req.body;
    const parsedpayload = CreateTodo.safeParse(todopayload);

    if (!parsedpayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        });
    }

    await todo.create({
        title: todopayload.title,
        description: todopayload.description,
        completed: false
    });

    res.status(200).json({
        msg: "Todo Created!!"
    }); 
});

// Get All Todos
app.get("/todos", async (req, res) => {
    const todosList = await todo.find({});
    res.status(200).json({
        todos: todosList
    });
});

app.post("/delete", async (req, res) => {
    await todo.deleteMany({
      completed: true,
    });
  
    const remainingTodos = await todo.find({}); // Fetch updated list
  
    res.status(200).json({
      todos: remainingTodos,
    });
  });
  
app.listen(3000, () => {
    console.log("The server is running on port 3000");
});
