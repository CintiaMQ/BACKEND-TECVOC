const Cuestionario = require('../models/cuestionario');

// Obtener todos los cuestionarios
exports.getAllCuestionarios = async (req, res) => {
  try {
    const cuestionarios = await Cuestionario.find();
    res.json(cuestionarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un cuestionario por ID
exports.getCuestionarioById = async (req, res) => {
  try {
    const cuestionario = await Cuestionario.findById(req.params.id);
    if (!cuestionario) return res.status(404).json({ message: 'Cuestionario no encontrado' });
    res.json(cuestionario);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo cuestionario
exports.createCuestionario = async (req, res) => {
  const cuestionario = new Cuestionario(req.body);
  try {
    const newCuestionario = await cuestionario.save();
    res.status(201).json(newCuestionario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un cuestionario por ID
exports.updateCuestionario = async (req, res) => {
  try {
    const cuestionario = await Cuestionario.findById(req.params.id);
    if (!cuestionario) return res.status(404).json({ message: 'Cuestionario no encontrado' });

    Object.assign(cuestionario, req.body);
    const updatedCuestionario = await cuestionario.save();
    res.json(updatedCuestionario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un cuestionario por ID
exports.deleteCuestionario = async (req, res) => {
  try {
    const cuestionario = await Cuestionario.findById(req.params.id);
    if (!cuestionario) return res.status(404).json({ message: 'Cuestionario no encontrado' });

    await cuestionario.remove();
    res.json({ message: 'Cuestionario eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
