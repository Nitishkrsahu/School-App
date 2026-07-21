const express = require('express');
const cors = require('cors');
const DatabaseConnection = require('./config/db');
const studentRoute = require('./routes/student');
const authRoute = require('./routes/auth.routes');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json())

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

DatabaseConnection();


app.use("/api/students", studentRoute);
app.use('/api/auth', authRoute);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})