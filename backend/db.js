const { default: mongoose } = require("mongoose");


mongoose.connect("mongodb+srv://gangasingh1734:<UhHWJqlIl0p0phWp>@cluster0.9r9p89k.mongodb.net/");


const todoschema = mongoose.Schema({
    title : string,
    description: string,
    completed: Boolean,
})

const todo = mongoose.model("todos",todoschema);

model.exports({
    todo :todo
})