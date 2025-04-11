const { default: mongoose } = require("mongoose");


mongoose.connect("mongodb+srv://gangasingh1734:UhHWJqlIl0p0phWp@cluster0.9r9p89k.mongodb.net/");


const todoschema = mongoose.Schema({
    title : String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model("todos",todoschema);

module.exports ={
    todo :todo
}