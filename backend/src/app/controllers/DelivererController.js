import * as Yup from 'yup';
import { Op } from 'sequelize';

import Deliverer from '../models/Deliverer';
import File from '../models/File';

class DelivererController {
  async index(req, res) {
    const { delivererName } = req.query;

    const deliverers = delivererName
      ? await Deliverer.findAll({
          where: {
            name: {
              [Op.or]: {
                [Op.iLike]: `%${delivererName}`,
                [Op.iLike]: `${delivererName}%`,
              },
            },
          },
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        })
      : await Deliverer.findAll({
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        });

    return res.json(deliverers);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const emailExists = await Deliverer.findOne({
      where: { email: req.body.email },
    });

    if (emailExists) {
      return res.status(400).json({ error: 'Email has already been taken.' });
    }

    const { id, name, email, avatar_id } = req.body;

    const deliverer = await Deliverer.create({
      id,
      name,
      email,
      avatar_id,
    });

    return res.json(deliverer);
  }

  async show(req, res) {
    const { deliverer_id } = req.params;

    const deliverer = await Deliverer.findByPk(deliverer_id, {
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(deliverer);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email('Formato inválido'),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const deliverer = await Deliverer.findByPk(req.params.deliverer_id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    const { name, email, avatar_id } = await deliverer.update(req.body);

    return res.json({
      name,
      email,
      avatar_id,
    });
  }

  async delete(req, res) {
    const { deliverer_id } = req.params;

    const deliverer = await Deliverer.findByPk(deliverer_id);

    if (!deliverer) {
      res.status(400).json({
        error: 'User was not found. Please check if you provided a valid id',
      });
    }

    try {
      await deliverer.destroy();
      return res.json({ message: 'Deliverer was successfully deleted ' });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

export default new DelivererController();
