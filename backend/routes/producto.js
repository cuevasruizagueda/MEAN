
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Ruta para el inicio de sesión
//router.post('/login', productoController.login);

// Resto de las rutas...
router.post('/', productoController.crearProducto);
router.get('/promedio', productoController.promedio);
router.get('/numero', productoController.numero);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;
