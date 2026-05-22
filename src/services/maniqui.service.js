import { findAll, findById, create, update, deleteElement } from '../models/maniqui.model.js';
import { findById as findPieza } from '../models/pieza.model.js';

const getAllManiquies = () => findAll();

const getManiquiById = (id) => {
  const maniqui = findById(id);
  if (!maniqui) throw new Error('Maniquí no encontrado');
  return maniqui;
};

const createManiqui = (data) => {
  const cabeza = findPieza('cabezas', data.id_cabeza);
  if (!cabeza) throw new Error('Cabeza no encontrada');

  const torso = findPieza('torsos', data.id_torso);
  if (!torso) throw new Error('Torso no encontrado');

  const brazoIzq = findPieza('brazos', data.id_brazo_izq);
  if (!brazoIzq) throw new Error('Brazo izquierdo no encontrado');

  const brazoDer = findPieza('brazos', data.id_brazo_der);
  if (!brazoDer) throw new Error('Brazo derecho no encontrado');

  const piernaIzq = findPieza('piernas', data.id_pierna_izq);
  if (!piernaIzq) throw new Error('Pierna izquierda no encontrada');

  const piernaDer = findPieza('piernas', data.id_pierna_der);
  if (!piernaDer) throw new Error('Pierna derecha no encontrada');

  return create(data);
};

const updateManiqui = (id, data) => {
  const maniqui = findById(id);
  if (!maniqui) throw new Error('Maniquí no encontrado');
  return update(id, data);
};

const deleteManiqui = (id) => {
  const deleted = deleteElement(id);
  if (!deleted) throw new Error('Maniquí no encontrado');
  return deleted;
};

export default { getAllManiquies, getManiquiById, createManiqui, updateManiqui, deleteManiqui };