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

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});

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

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/deliverers', upload.single('file'), DelivererController.store);
routes.put('/deliverers/:deliverer_id/delete', DelivererController.update);
routes.delete('/deliverers/deliverer_id', DelivererController.delete);

routes.get('/orders', OrderController.index);
routes.post('/orders', OrderController.store);
routes.put('/orders/order_id/update', OrderController.update);
routes.delete('/orders/:order_id/delete', OrderController.delete);

routes.post('/addressees', AddresseeController.store);

routes.get('/orders/delivery_issues', DeliveryIssueController.index);
routes.get('/orders/:order_id/delivery_issues', DeliveryIssueController.show);

export default routes;
