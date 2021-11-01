const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/joke', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("connected to joke"))
.catch(err=>console.log(err))