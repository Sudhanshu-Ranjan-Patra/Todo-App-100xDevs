const express = require("express");
const { createTodo, updateTodo } = require("./type");
const cors = require("cors");
const { todo } = require("./db");

const app = express();

app.use(express.json());
app.use(cors(
    // {
    // origin: "http://localhost:5173" // to allow only this frontend to use the backend
    // }
))

// body{
//     todo: String;
//     description: String;
// }

app.post("/todo", async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    };
    //put it in mongooDB
    await todo.create({
        title: createPayload.title,
        desc: createPayload.desc,
        completed: false,
    });

    res.json({
        msg: "Todo Created"
    });
});

app.get("/todos", async (req, res)=>{
    const todos = await todo.find({});
    console.log(todos); //Promise

    res.json({
        todos
    })
    
});

app.put("/completed",async (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    //put it in mongooDB
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "TODO marked as completed"
    })
});

app.listen((3000),() => {
    console.log("Server started on post 3000");
    
});
