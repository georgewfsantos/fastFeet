import * as Yup from 'yup';

import Issue from '../models/Issue';
import Order from '../models/Order';

class DeliveryIssueController {
  async index(req, res) {
    const delivery_issues = await Issue.findAll();

    return res.json(delivery_issues);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { order_id } = req.params;

    const order = await Order.findByPk(order_id);

    if (!order) {
      return res
        .status(400)
        .json({ error: 'No order with that id was found.' });
    }

    const { description } = req.body;

    const delivery_issue = await Issue.create({
      order_id,
      description,
    });
    return res.json(delivery_issue);
  }

  async show(req, res) {
    const { order_id } = req.params;

    const delivery_issues = await Issue.findOne({
      where: {
        order_id,
      },
    });

    if (!delivery_issues) {
      return res.json({ message: 'No reported issues for that order' });
    }

    return res.json(delivery_issues);
  }
}

export default new DeliveryIssueController();
