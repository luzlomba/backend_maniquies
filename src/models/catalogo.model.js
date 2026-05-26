import { materiales, colores } from '../data/data.js';

const colecciones = { materiales, colores };

export const findAll = (tipo) => colecciones[tipo];

export const findById = (tipo, id) => {
  const idKey = tipo === 'materiales' ? 'id_material' : 'id_color';
  return colecciones[tipo].find(c => c[idKey] === parseInt(id));
};

export const create = (tipo, data) => {
  const idKey = tipo === 'materiales' ? 'id_material' : 'id_color';
  const coleccion = colecciones[tipo];
  const newItem = { [idKey]: coleccion.length + 1, ...data };
  coleccion.push(newItem);
  return newItem;
};

export const update = (tipo, id, data) => {
  const idKey = tipo === 'materiales' ? 'id_material' : 'id_color';
  const coleccion = colecciones[tipo];
  const index = coleccion.findIndex(c => c[idKey] === parseInt(id));
  if (index === -1) return null;
  coleccion[index] = { ...coleccion[index], ...data };
  return coleccion[index];
};

export const deleteElement = (tipo, id) => {
  const idKey = tipo === 'materiales' ? 'id_material' : 'id_color';
  const coleccion = colecciones[tipo];
  const index = coleccion.findIndex(c => c[idKey] === parseInt(id));
  if (index === -1) return null;
  return coleccion.splice(index, 1)[0];
};