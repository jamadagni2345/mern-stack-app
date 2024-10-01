const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const source = "mongodb+srv://manogna1234:PvRuXli5glzNX6yi@manognacluster.k9wmn.mongodb.net/mernapp?retryWrites=true&w=majority";
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');
const { default: mongoose } = require('mongoose');
const port = process.env.PORT || 5000 

connectDB()

const app = express()
// mongoose.connect(source, {UseNewUrlParser: true});

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () =>console.log(`Server started on port ${port}`))