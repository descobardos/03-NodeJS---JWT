const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/simplejwt', {
    useNewUrlParser: true,
    useCreateIndex: true
})

.then(() => console.log('Database is Connected'));