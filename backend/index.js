
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Rutas
app.use('/api/productos', require('./routes/producto'));


// Puerto usado
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});












