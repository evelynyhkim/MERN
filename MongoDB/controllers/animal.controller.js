const Animal = require('../models/animal.model')

module.exports = {
    findAllAnimals: (req, res)=>{
        Animal.find()
        .then((animals)=>{
            console.log(animals)
            res.json(animals)
        })
        .catch(err=>console.log(err))
    },
    createNewAnimal: (req, res)=>{
        Animal.exists({name: req.body.name})
        .then(doesExist => {
            if(doesExist) {
                let msg = `Error: Animal with name ${req.body.name} already exists.`
                res.json(msg)
                return Promise.reject(msg)
            } else return Animal.create(req.body)
        })
        //Animal.create(req.body)
        .then((newAnimal)=>{
            console.log(newAnimal)
            res.json(newAnimal)
        })
        .catch(err=>console.log(err))
    },
    deleteAnimal: (req, res)=>{
        Animal.deleteOne({_id: req.params.id})
            .then((animal)=>{
            console.log(animal)
            res.json({theAnimal: animal})
        })
        .catch(err=>console.log(err))
    },
    updateAnimal: (req, res)=>{
        Animal.findOneAndUpdate(
            {name: req.params.name},
            req.body,
            {new: true, runValidators: true}
        )
        .then((animal)=>{
            console.log(animal)
            res.json(animal)
        })
        .catch(err=>console.log(err))
    },
    getAnimal: (req, res)=>{
    Animal.findOne({name: req.params.name})
    .then((animal)=>{
        console.log(animal)
        res.json({theAnimal: animal})
    })
    .catch(err=>console.log(err))
}
}