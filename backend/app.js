import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'  // Loads .env variables 
import productRoutes from './routes/productRoutes.js'
import Todo from './models/todo.js';


// 1. Initializing the Express application
const app = express();
const PORT = process.env.PORT || 3000;

// 2. Built-in middleware to parse incoming JSON requests
app.use(express.json());

// 3. Define a basic GET route (home page)
app.get('/',(req,res) => {
    res.send("welcome to me express server")
})

// 4. Define a POST route to accept data
app.post('/api/users',(req,res) => {
    const {name, role} = req.body;

    // respond back with a success status
    res.status(200).json({
        message:'User created successfully',
        data:{name, role}

    })
})


app.use('/api', productRoutes);


// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Successfully connected to mongoDB'))
.catch((error) => console.error(" MongoDB connection error:",error))



app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})