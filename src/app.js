const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));  // Servidor entiende los datos que envian a traves de formulario y los convierte en un objeto JS

app.use(require('./controllers/authController'));




module.exports = app;