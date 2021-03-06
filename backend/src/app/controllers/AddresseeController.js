import * as Yup from 'yup';
import { Op } from 'sequelize';

import Addressee from '../models/Addressee';

class AddresseeController {
  async index(req, res) {
    const { addresseeName } = req.query;

    const addressees = addresseeName
      ? await Addressee.findAll({
          where: {
            name: {
              [Op.or]: {
                [Op.iLike]: `%${addresseeName}`,
                [Op.iLike]: `${addresseeName}%`,
              },
            },
          },
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'complement',
            'city',
            'state',
            'zip_code',
          ],
        })
      : await Addressee.findAll({
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'complement',
            'city',
            'state',
            'zip_code',
          ],
        });

    return res.json(addressees);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string()
        .max(2)
        .required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation failed. Check the information provided' });
    }

    const addressee = await Addressee.create(req.body);
    return res.json(addressee);
  }

  async show(req, res) {
    const { addressee_id } = req.params;

    const addressee = await Addressee.findByPk(addressee_id);

    return res.json(addressee);
  }

  async update(req, res) {
    const { addressee_id } = req.params;

    const addressee = await Addressee.findByPk(addressee_id);

    addressee.update(req.body);

    return res.json(addressee);
  }

  async delete(req, res) {
    const { addressee_id } = req.params;

    const addressee = await Addressee.findByPk(addressee_id);

    try {
      await addressee.destroy();
      return res.json({ message: 'Addressee was successfully deleted ' });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

export default new AddresseeController();
