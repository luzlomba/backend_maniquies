import catalogoService from '../services/catalogo.service.js';

const getItems = (req, res) => {
  try {
    const items = catalogoService.getAllItems(req.tipo);
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItem = (req, res) => {
  try {
    const item = catalogoService.getItemById(req.tipo, req.params.id);
    res.json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createItem = (req, res) => {
  try {
    const item = catalogoService.createItem(req.tipo, req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateItem = (req, res) => {
  try {
    const item = catalogoService.updateItem(req.tipo, req.params.id, req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteItem = (req, res) => {
  try {
    catalogoService.deleteItem(req.tipo, req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getItems, getItem, createItem, updateItem, deleteItem };