import { modelosPieza, modelosExtremidad } from '../data/data.js';

const colecciones = { modelosPieza, modelosExtremidad };

export const findAll = (tipo) => colecciones[tipo];

export const findById = (tipo, id) =>
  colecciones[tipo].find(m => m.id_modelo === parseInt(id));

export const create = (tipo, data) => {
  const coleccion = colecciones[tipo];
  const newModelo = { id_modelo: coleccion.length + 1, ...data };
  coleccion.push(newModelo);
  return newModelo;
};

export const update = (tipo, id, data) => {
  const coleccion = colecciones[tipo];
  const index = coleccion.findIndex(m => m.id_modelo === parseInt(id));
  if (index === -1) return null;
  coleccion[index] = { ...coleccion[index], ...data };
  return coleccion[index];
};

export const deleteElement = (tipo, id) => {
  const coleccion = colecciones[tipo];
  const index = coleccion.findIndex(m => m.id_modelo === parseInt(id));
  if (index === -1) return null;
  return coleccion.splice(index, 1)[0];
};