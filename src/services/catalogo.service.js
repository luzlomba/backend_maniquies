import { findAll, findById, create, update, deleteElement } from '../models/catalogo.model.js';

const getAllItems = (tipo) => findAll(tipo);

const getItemById = (tipo, id) => {
  const item = findById(tipo, id);
  if (!item) throw new Error(`${tipo} no encontrado`);
  return item;
};

const createItem = (tipo, data) => create(tipo, data);

const updateItem = (tipo, id, data) => {
  const item = findById(tipo, id);
  if (!item) throw new Error(`${tipo} no encontrado`);
  return update(tipo, id, data);
};

const deleteItem = (tipo, id) => {
  const deleted = deleteElement(tipo, id);
  if (!deleted) throw new Error(`${tipo} no encontrado`);
  return deleted;
};

export default { getAllItems, getItemById, createItem, updateItem, deleteItem };