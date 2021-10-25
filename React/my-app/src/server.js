const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extend: true}))

app.listen(8000, () => console.log("you've connected to port 8000"))
