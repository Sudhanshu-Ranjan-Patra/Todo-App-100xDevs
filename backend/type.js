const zod = require("zod");

const createTodo = zod.object({
    title: zod.string().min(1).max(20),
    desc: zod.string().min(3).max(30)
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}