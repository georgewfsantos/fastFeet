import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import Order from '../models/Order';
import Deliverer from '../models/Deliverer';

class DelivererActionsController {
  async index(req, res) {
    const { deliverer_id } = req.params;

    const deliverer = await Deliverer.findOne({
      where: {
        id: deliverer_id,
      },
    });
    if (!deliverer) {
      return res
        .status(400)
        .json({ error: 'No deliverers were found with that id' });
    }

    const orders = await Order.findAll({
      where: {
        deliverer_id,
      },
    });

    const pendingOrders = orders.filter(order => {
      return order.end_date === null && order.canceled_at === null;
    });

    return res.json(pendingOrders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const deliverer = await Deliverer.findByPk(req.body.id);

    if (!deliverer) {
      return res.status(401).json({ error: 'Student  not found' });
    }

    const { id, name, email, avatar_id } = deliverer;

    return res.json({
      deliverer: {
        id,
        name,
        email,
        avatar_id,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      end_date: Yup.date(),
      signature_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { end_date, signature_id } = req.body;

    const { deliverer_id, order_id } = req.params;

    const order = await Order.findOne({
      where: {
        id: order_id,
        deliverer_id,
      },
    });

    order.update({
      end_date,
      signature_id,
    });

    return res.json(order);
  }
}

export default new DelivererActionsController();
