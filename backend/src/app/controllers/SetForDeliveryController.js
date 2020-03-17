import * as Yup from 'yup';
import { isToday } from 'date-fns';

import Order from '../models/Order';

class SetForDeliveryController {
  async update(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { deliverer_id, order_id } = req.params;

    const { start_date } = req.body;

    // check if more than five order deliveries

    const orders = await Order.findAll({
      where: {
        deliverer_id,
      },
    });

    const checkLimit = orders.filter(o => {
      return o.start_date !== null && isToday(o.start_date);
    });

    if (checkLimit.length >= 5) {
      return res.status(400).json({
        error: ` You are not allowed to deliver more than five orders on the same day`,
      });
    }

    // check if the current time is within the allowed range
    const start = new Date().getHours();

    if (!(start >= 8 && start < 18)) {
      return res
        .status(400)
        .json({ error: 'You can only take orders to deliver from 8am to 6pm' });
    }

    const order = await Order.findOne({
      where: {
        id: order_id,
        deliverer_id,
      },
    });

    // chekck if order has already been taken out for delivery
    if (order.start_date !== null) {
      return res
        .status(400)
        .json({ error: 'Order has already been taken out for delivery' });
    }

    order.update({
      start_date,
    });

    return res.json(order);
  }
}

export default new SetForDeliveryController();
