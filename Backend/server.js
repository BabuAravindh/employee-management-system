const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const connection = require('./config/db')
dotenv.config()
PORT = 5000

app.use(express.json())
app.use(cors())
const employeeRoutes = require('./routes/employee')

app.use('/uploads',express.static('uploads'))
app.use('/api/employee',employeeRoutes)

app.listen(PORT, ()=>{
    console.log(`server is running on ${5000}`)
})