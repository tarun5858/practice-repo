import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

// middleware 
app.use(express.json());

// 1. Create (Data Recieve krna) - POST request
app.post('/api/books',(req,res) => {
    const newBook = req.body; // jo data frontend se aaega
    console.log('Incoming Data:', newBook);

    res.status(201).json({
        message:"book created successfully",
        data: newBook
    });
});

// 2. READ (Data show krna) - GET request
app.get('/api/books',(req,res) => {
    console.log('User wants to see all books.');

    res.status(200).json({
        message:"fetching all books"
    })
})

// 3. READ Single book (Id ke saath) - GET Request
app.get('/api/books/:id',(req,res) => {
    const bookId = req.params.id;  // URL se id nikalna

    console.log("read single book");

    res.status(200).json({
        message:`Fetching book with ID: ${bookId} `
    })
})

// 4. UPDATE (Data change krna) - PUT request
app.put('/api/books/:id',(req,res) => {
    const bookId = req.params.id;
    const updatedData = req.body;

    console.log('Updated Data received:', updatedData);

    res.status(200).json({
        message:`Book with ID ${bookId} updated`,
        data: updatedData
    })
})

// 5. DELETE (Data remove krna) - DELETE request
app.delete('/api/books/:id',(req,res) => {
    const bookId = req.params.id;
    

    console.log(`Delete book (ID: ${bookId})`);

    res.status(200).json({
        message:`book with ID: ${bookId} is deleted`
    })
})

app.listen(PORT, ()=>{
    console.log(`CRUD server is running at : http://localhost:${PORT}`)
})