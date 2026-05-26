import modeloService from '../services/modelo.service.js';

const getModelos = (req, res) => {
  try {
    const modelos = modeloService.getAllModelos(req.tipo);
    res.json(modelos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getModelo = (req, res) => {
  try {
    const modelo = modeloService.getModeloById(req.tipo, req.params.id);
    res.json(modelo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createModelo = (req, res) => {
  try {
    const modelo = modeloService.createModelo(req.tipo, req.body);
    res.status(201).json(modelo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateModelo = (req, res) => {
  try {
    const modelo = modeloService.updateModelo(req.tipo, req.params.id, req.body);
    res.json(modelo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteModelo = (req, res) => {
  try {
    modeloService.deleteModelo(req.tipo, req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getModelos, getModelo, createModelo, updateModelo, deleteModelo };