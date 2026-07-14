const express = require('express');
const cors = require('cors');
const DatabaseConnection = require('./config/db');
const studentRoute = require('./routes/student');
require('dotenv').config();

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json())
DatabaseConnection();


app.use("/api/students", studentRoute);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})