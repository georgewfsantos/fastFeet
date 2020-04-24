import Order from '../models/Order';
import Addressee from '../models/Addressee';
import Deliverer from '../models/Deliverer';

class OnlyDeliveredController {
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
        id: deliverer_id,
      },
      include: [{ model: Addressee, as: 'addressee' }],
    });

    const deliveredOrders = orders.filter(order => {
      return order.end_date !== null;
    });

    return res.json(deliveredOrders);
  }
}

export default new OnlyDeliveredController();
