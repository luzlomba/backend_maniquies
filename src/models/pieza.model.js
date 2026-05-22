import { cabezas, torsos, brazos, piernas } from '../data/data.js';

const colecciones = { cabezas, torsos, brazos, piernas };

export const findAll = (tipo) => colecciones[tipo];

export const findById = (tipo, id) => {
  const idKey = `id_${tipo.slice(0, -1)}`;
  return colecciones[tipo].find(p => p[idKey] === parseInt(id));
};

export const create = (tipo, data) => {
  const idKey = `id_${tipo.slice(0, -1)}`;
  const coleccion = colecciones[tipo];
  const newPieza = { [idKey]: coleccion.length + 1, ...data };
  coleccion.push(newPieza);
  return newPieza;
};

export const update = (tipo, id, data) => {
  const idKey = `id_${tipo.slice(0, -1)}`;
  const coleccion = colecciones[tipo];
  const index = coleccion.findIndex(p => p[idKey] === parseInt(id));
  if (index === -1) return null;
  coleccion[index] = { ...coleccion[index], ...data };
  return coleccion[index];
};

export const deleteElement = (tipo, id) => {
  const idKey = `id_${tipo.slice(0, -1)}`;
  const coleccion = colecciones[tipo];
  const index = coleccion.findIndex(p => p[idKey] === parseInt(id));
  if (index === -1) return null;
  return coleccion.splice(index, 1)[0];
};