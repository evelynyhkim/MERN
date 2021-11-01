const express = require('express')
////const mongoose = require('mongoose')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//set up mongoose
////
require("./config/mongoose.config")
require("./routes/animal.route")(app)

//model and schema
////

//api logic
// 
app.listen(8000, ()=>console.log("App listening on port 8000"))

app.get('/api', (req, res)=>{
    console.log("response sent")
    res.json({id:780202, username: "yourethebest"})
})

//app.get("/api/animals", (req, res)=>{
//     Animal.find()
//     .then((animals)=>{
//         console.log(animals)
//         res.json({theAnimals: animals})
//     })
//     .catch(err=>console.log(err))
// })

// app.post("/api/animals", (req, res)=>{
//     Animal.create(req.body)
//     .then((newAnimal)=>{
//         console.log(newAnimal)
//         res.json(newAnimal)
//     })
//     .catch(err=>console.log(err))
// })

// app.get("/api/animals/:name", (req, res)=>{
//     Animal.findOne({name: req.params.name})
//     .then((animal)=>{
//         console.log(animal)
//         res.json({theAnimal: animal})
//     })
//     .catch(err=>console.log(err))
// })

// app.delete("/api/animals/:id", (req, res)=>{
//     Animal.deleteOne({_id: req.params.id})
//         .then((animal)=>{
//         console.log(animal)
//         res.json({theAnimal: animal})
//     })
//     .catch(err=>console.log(err))
// })

// app.put("/api/animals/:name", (req, res)=>{
//     Animal.findOneAndUpdate(
//         {name: req.params.name},
//         req.body,
//         {new: true, runValidators: true}
//     )
//     .then((animal)=>{
//         console.log(animal)
//         res.json(animal)
//     })
//     .catch(err=>console.log(err))
// })