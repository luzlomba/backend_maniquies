import { maniquies } from '../data/data.js';

export const findAll = () => maniquies;

export const findById = (id) =>
  maniquies.find(m => m.id_maniqui === parseInt(id));

export const create = (data) => {
  const newManiqui = { id_maniqui: maniquies.length + 1, ...data };
  maniquies.push(newManiqui);
  return newManiqui;
};

export const update = (id, data) => {
  const index = maniquies.findIndex(m => m.id_maniqui === parseInt(id));
  if (index === -1) return null;
  maniquies[index] = { ...maniquies[index], ...data };
  return maniquies[index];
};

export const deleteElement = (id) => {
  const index = maniquies.findIndex(m => m.id_maniqui === parseInt(id));
  if (index === -1) return null;
  return maniquies.splice(index, 1)[0];
};