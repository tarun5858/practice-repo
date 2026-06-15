import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config"
import Todo from './models/todo.js';

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true })); //Form data (URL Encoded) ko parse karne ke liye (ZAROORI HAI)
app.set("view engine", "ejs");


// 1. GET Route: Saare To-Dos fetch karke Browser UI par bhejna
app.get('/', async(req,res) => {
  try{
    const allTodos = await Todo.find().sort({createdAt : -1});
    res.render("index",{todos: allTodos})

  }catch(err){
     res.status(500).send("Database Error: "+ err.message)
  }
});

// post route: Naya Task aur Image URL database me save karna
app.post('/add-todo', async(req,res) => {
    const {task, imageUrl} = req.body;
    try{
        const newTodo = new Todo({task, imageUrl})
        await newTodo.save();
        res.redirect("/");
    }catch(err){
        res.status(200).send("Error saving data: " + err.message)
    }
})

// post route (delete): Task ko delete karna
app.post('/delete-todo/:id', async(req,res) => {
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.redirect("/");

    }catch(err){
        res.status(500).send("Delete error: " + err.message)
    }
})

// mongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("mongoDB Connected Successfully"))
.catch(err => console.error("DB Connection Error:", err))

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})