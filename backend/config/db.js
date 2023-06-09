const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });


const conectarDB = async () => {
  
  try {
    await mongoose.connect(process.env.DB_MONGO, {

     user: process.env.DB_USER,
     pass: process.env.DB_PASSWORD,
     useNewUrlParser: true,
     useUnifiedTopology: true,
     
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); // Detenemos la app
  }
};


module.exports = conectarDB;

