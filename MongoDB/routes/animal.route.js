const AnimalController = require('../controllers/animal.controller')

module.exports = (app)=>{
    app.get("/api/animals", AnimalController.findAllAnimals)
    app.post('/api/animals', AnimalController.createNewAnimal)
    app.delete('/api/animals/:id', AnimalController.deleteAnimal)
    app.put('/api/animals/:name', AnimalController.updateAnimal)
    app.get("/api/animals/:name", AnimalController.getAnimal)
}