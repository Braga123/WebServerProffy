//Get: Buscar ou listar uma irformação
//** Usar insominia pq o navegador so interpreta Get
//Post: Criar alguma nova informação
//Put: atualizar uma informação existente
//Delete: Deletar uma informação existente


import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)
export default routes;