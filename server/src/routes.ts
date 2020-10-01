import express from 'express';

import CalculadoraController from './controllers/CalculadoraController';

const routes = express.Router();
const calculadoraController = new CalculadoraController();

routes.get('/soma', calculadoraController.soma);
routes.get('/sub', calculadoraController.sub);
routes.get('/div', calculadoraController.div);
routes.get('/mult', calculadoraController.mult);

export default routes;
