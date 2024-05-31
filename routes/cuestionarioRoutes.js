const express = require('express');
const router = express.Router();
const cuestionarioController = require('../controllers/cuestionarioController');

// Obtener todos los cuestionarios
router.get('/', cuestionarioController.getAllCuestionarios);

// Obtener un cuestionario por ID
router.get('/:id', cuestionarioController.getCuestionarioById);

// Crear un nuevo cuestionario
router.post('/', cuestionarioController.createCuestionario);

// Actualizar un cuestionario por ID
router.put('/:id', cuestionarioController.updateCuestionario);

// Eliminar un cuestionario por ID
router.delete('/:id', cuestionarioController.deleteCuestionario);

module.exports = router;
