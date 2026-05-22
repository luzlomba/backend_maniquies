import { findAll, findById, create, update, deleteElement } from '../models/pieza.model.js';

const getAllPiezas = (tipo) => findAll(tipo);

const getPiezaById = (tipo, id) => {
  const pieza = findById(tipo, id);
  if (!pieza) throw new Error('Pieza no encontrada');
  return pieza;
};

const createPieza = (tipo, data) => create(tipo, data);

const updatePieza = (tipo, id, data) => {
  const pieza = findById(tipo, id);
  if (!pieza) throw new Error('Pieza no encontrada');
  return update(tipo, id, data);
};

const deletePieza = (tipo, id) => {
  const deleted = deleteElement(tipo, id);
  if (!deleted) throw new Error('Pieza no encontrada');
  return deleted;
};

export default { getAllPiezas, getPiezaById, createPieza, updatePieza, deletePieza };