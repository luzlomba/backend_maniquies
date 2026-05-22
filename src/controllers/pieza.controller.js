import piezaService from '../services/pieza.service.js';

const getPiezas = (req, res) => {
  try {
    const piezas = piezaService.getAllPiezas(req.tipo);
    res.json(piezas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPieza = (req, res) => {
  try {
    const pieza = piezaService.getPiezaById(req.tipo, req.params.id);
    res.json(pieza);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPieza = (req, res) => {
  try {
    const pieza = piezaService.createPieza(req.tipo, req.body);
    res.status(201).json(pieza);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePieza = (req, res) => {
  try {
    const pieza = piezaService.updatePieza(req.tipo, req.params.id, req.body);
    res.json(pieza);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePieza = (req, res) => {
  try {
    piezaService.deletePieza(req.tipo, req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getPiezas, getPieza, createPieza, updatePieza, deletePieza };