const express = require('express')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//mongoose
require('./config/mongoose.config')
require('./routes/joke.route')(app)

app.listen(8000, ()=>console.log("listening on port 8000"))