import maniquiService from '../services/maniqui.service.js';

const getManiquies = (req, res) => {
  try {
    const maniquies = maniquiService.getAllManiquies();
    res.json(maniquies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getManiqui = (req, res) => {
  try {
    const maniqui = maniquiService.getManiquiById(req.params.id);
    res.json(maniqui);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createManiqui = (req, res) => {
  try {
    const maniqui = maniquiService.createManiqui(req.body);
    res.status(201).json(maniqui);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateManiqui = (req, res) => {
  try {
    const maniqui = maniquiService.updateManiqui(req.params.id, req.body);
    res.json(maniqui);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteManiqui = (req, res) => {
  try {
    maniquiService.deleteManiqui(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getManiquies, getManiqui, createManiqui, updateManiqui, deleteManiqui };