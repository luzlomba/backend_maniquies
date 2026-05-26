import { findAll, findById, create, update, deleteElement } from '../models/modelo.model.js';

const getAllModelos = (tipo) => findAll(tipo);

const getModeloById = (tipo, id) => {
  const modelo = findById(tipo, id);
  if (!modelo) throw new Error('Modelo no encontrado');
  return modelo;
};

const createModelo = (tipo, data) => create(tipo, data);

const updateModelo = (tipo, id, data) => {
  const modelo = findById(tipo, id);
  if (!modelo) throw new Error('Modelo no encontrado');
  return update(tipo, id, data);
};

const deleteModelo = (tipo, id) => {
  const deleted = deleteElement(tipo, id);
  if (!deleted) throw new Error('Modelo no encontrado');
  return deleted;
};

export default { getAllModelos, getModeloById, createModelo, updateModelo, deleteModelo };