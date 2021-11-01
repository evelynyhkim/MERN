const JokeController = require('../controllers/joke.controller')

module.exports = (app) => {
    app.post('/api/jokes', JokeController.createJoke),
    app.get('/api/jokes', JokeController.getAllJokes),
    app.get('/api/jokes/:_id', JokeController.getOneJoke),
    app.delete('/api/jokes/:_id', JokeController.deleteOneJoke),
    app.put('/api/jokes/:_id', JokeController.updateOneJoke)
} 