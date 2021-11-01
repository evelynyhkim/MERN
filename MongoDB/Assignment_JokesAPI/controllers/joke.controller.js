const Joke = require('../models/joke.model')

module.exports = {
    createJoke: (req, res) => {
        Joke.create(req.body)
        .then(joke=>res.json(joke))
        .catch(err=>console.log(err))
    },
    getOneJoke: (req, res) => {
        Joke.findOne({_id: req.params._id})
        .then(joke=>res.json(joke))
        .catch(err=>console.log(err))
    },
    getAllJokes: (req, res) => {
        Joke.find()
        .then(jokes=>res.json(jokes))
        .catch(err=>console.log(err))
    },
    deleteOneJoke: (req, res) => {
        Joke.deleteOne({_id: req.params._id})
        .then(joke=>res.json(joke))
        .catch(err=>console.log(err))
    },
    updateOneJoke: (req, res) => {
        Joke.findOneAndUpdate(
            {_id: req.params._id}, 
            req.body,
            {new: true, runValidators: true}
        )
        .then(joke => res.json(joke))
        .catch(err => console.log(err))
    }

}