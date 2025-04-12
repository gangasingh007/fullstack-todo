const { default: mongoose } = require("mongoose");


mongoose.connect("mongodb://localhost:27017");


const todoschema = mongoose.Schema({
    title : String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model("todos",todoschema);

module.exports ={
    todo :todo
}