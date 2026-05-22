import { Router } from 'express';
import { materiales, colores } from '../data/data.js';

const catalogoRoutes = Router();

catalogoRoutes.get('/materiales', (req, res) => {
  res.json(materiales);
});

catalogoRoutes.get('/colores', (req, res) => {
  res.json(colores);
});

export default catalogoRoutes;