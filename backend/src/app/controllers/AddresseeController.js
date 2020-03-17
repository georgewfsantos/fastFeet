import * as Yup from 'yup';

import Addressee from '../models/Addressee';

class AddresseeController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
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
}

export default new AddresseeController();
