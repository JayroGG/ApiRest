//Configuring my variables .env
require('dotenv').config()
 
//Requiring the modules
const express =  require('express')
const app = express()
const mongoose = require('mongoose')

//Establishing  DB conection
mongoose.set("strictQuery", false)
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection

//Catching conection errors
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//Declaring JSON content type for response
app.use(express.json())

//Setting the routes for the REst endpoints 
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

//API listening
const port = process.env.PORT
app.listen(port, () => console.log(`Server Up on http://localhost:${port}/users`))
