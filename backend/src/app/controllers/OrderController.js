import * as Yup from 'yup';
import { Op } from 'sequelize';

import Order from '../models/Order';
import Deliverer from '../models/Deliverer';
import Addressee from '../models/Addressee';
import File from '../models/File';

import NewOrderMail from '../jobs/NewOrderMail';
import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class OrderController {
  async index(req, res) {
    const { productName } = req.query;

    const orders = productName
      ? await Order.findAll({
          where: {
            product: {
              [Op.or]: {
                [Op.iLike]: `%${productName}`,
                [Op.iLike]: `${productName}%`,
              },
            },
          },

          include: [
            {
              model: Deliverer,
              as: 'deliverer',
              attributes: ['id', 'name'],
            },
            {
              model: Addressee,
              as: 'addressee',
              attributes: [
                'id',
                'name',
                'street',
                'number',
                'city',
                'zip_code',
                'state',
              ],
            },
            {
              model: File,
              as: 'signature',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        })
      : await Order.findAll({
          include: [
            {
              model: Deliverer,
              as: 'deliverer',
              attributes: ['id', 'name'],
            },
            {
              model: Addressee,
              as: 'addressee',
              attributes: [
                'id',
                'name',
                'street',
                'number',
                'city',
                'zip_code',
                'state',
              ],
            },
            {
              model: File,
              as: 'signature',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        });

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      deliverer_id: Yup.number().required(),
      addressee_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    const { deliverer_id, addressee_id, product } = req.body;

    const deliverer = await Deliverer.findOne({
      where: {
        id: deliverer_id,
      },
    });
    const addressee = await Addressee.findOne({
      where: {
        id: addressee_id,
      },
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    if (!deliverer) {
      return res
        .status(400)
        .json({ error: 'No deliverer was found with that id' });
    }

    if (!addressee) {
      return res
        .status(400)
        .json({ error: 'No addressee was found with that id' });
    }

    const order = await Order.create({
      deliverer_id,
      addressee_id,
      product,
    });

    await Queue.add(NewOrderMail.key, {
      deliverer,
      addressee,
      order,
    });

    return res.json(order);
  }

  async show(req, res) {
    const { id } = req.params;

    const order = await Order.findByPk(id, {
      attributes: [
        'id',
        'product',
        'start_date',
        'end_date',
        'canceled_at',
        'signature_id',
      ],
      include: [
        {
          model: Deliverer,
          as: 'deliverer',
          attributes: ['id', 'name'],
        },
        {
          model: Addressee,
          as: 'addressee',
          attributes: ['id', 'name', 'city', 'state'],
        },
      ],
    });

    return res.json(order);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      deliverer_id: Yup.number(),
      addressee_id: Yup.number(),
      product: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { order_id } = req.params;

    const order = await Order.findByPk(order_id);

    const { id, deliverer_id, addressee_id, product } = await order.update(
      req.body
    );

    return res.json({
      id,
      deliverer_id,
      addressee_id,
      product,
    });
  }

  async delete(req, res) {
    const { order_id } = req.params;

    const order = await Order.findByPk(order_id, {
      include: [
        {
          model: Deliverer,
          as: 'deliverer',
          attributes: ['name', 'email'],
        },
        {
          model: Addressee,
          as: 'addressee',
          attributes: [
            'name',
            'street',
            'number',
            'complement',
            'city',
            'state',
            'zip_code',
          ],
        },
      ],
    });

    if (!order) {
      res.status(400).json({
        error: 'Order was not found. Please check if you provided a valid id',
      });
    }

    try {
      order.canceled_at = new Date();

      await order.save();

      await Queue.add(CancellationMail.key, {
        order,
      });

      return res.json({ message: 'Order was successfully canceled ' });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

export default new OrderController();
