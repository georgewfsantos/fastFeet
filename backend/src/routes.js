import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import DelivererController from './app/controllers/DelivererController';
import OrderController from './app/controllers/OrderController';
import AddresseeController from './app/controllers/AddresseeController';
import DelivererActionsController from './app/controllers/DelivererActionsController';
import OnlyDeliveredController from './app/controllers/OnlyDeliveredController';
import SetForDeliveryController from './app/controllers/SetForDeliveryController';
import DeliveryIssueController from './app/controllers/DeliveryIssueController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/deliverer_sessions', DelivererActionsController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/deliverers', DelivererController.index);
routes.post('/deliverers', upload.single('file'), DelivererController.store);
routes.get('/deliverers/:deliverer_id', DelivererController.show);
routes.put(
  '/deliverers/:deliverer_id/update',
  upload.single('file'),
  DelivererController.update
);
routes.delete('/deliverers/:deliverer_id/delete', DelivererController.delete);

routes.get('/orders', OrderController.index);
routes.get('/orders/:id/details', OrderController.show);
routes.post('/orders', OrderController.store);
routes.put('/orders/:order_id/update', OrderController.update);
routes.delete('/orders/:order_id/delete', OrderController.delete);

routes.get('/addressees', AddresseeController.index);
routes.get('/addressees/:addressee_id', AddresseeController.show);
routes.post('/addressees', AddresseeController.store);
routes.put('/addressees/:addressee_id/update', AddresseeController.update);
routes.delete('/addressees/:addressee_id/delete', AddresseeController.delete);

routes.get('/orders/delivery_issues', DeliveryIssueController.index);
routes.get('/orders/:order_id/delivery_issues', DeliveryIssueController.show);

// Deliverer routes
routes.get('/deliverer/:deliverer_id/orders', DelivererActionsController.index);
routes.get(
  '/deliverer/:deliverer_id/delivered_orders',
  OnlyDeliveredController.index
);

routes.put(
  '/deliverer/:deliverer_id/orders/:order_id/end_date/update',
  DelivererActionsController.update
);

routes.put(
  '/deliverer/:deliverer_id/orders/:order_id/start_date/update',
  SetForDeliveryController.update
);

routes.post('/orders/:order_id/delivery_issues', DeliveryIssueController.store);

export default routes;
