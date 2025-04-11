const zod = require("zod");


const CreateTodo = zod.object({
    title : zod.string(),
    description : zod.string(),
})

const UpdateTodo = Zod.object({
    id : zod.string(),
})

module.exports({
    CreateTodo : CreateTodo,
    UpdateTodo : UpdateTodo,
})