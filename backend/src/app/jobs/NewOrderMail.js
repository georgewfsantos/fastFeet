import Mail from '../../lib/Mail';

class NewOrderMail {
  // each job needs a unique key ( usually I use the name of the class as the key)
  get key() {
    return 'NewOrderMail';
  }

  async handle({ data }) {
    const { deliverer, addressee, order } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${deliverer.name} <${deliverer.email}>`,
      subject: 'You have been assigned a new order',
      template: 'order',
      context: {
        deliverer: deliverer.name,
        name: addressee.name,
        product: order.product,
        street: addressee.street,
        number: addressee.number,
        complement: addressee.complement,
        state: addressee.state,
        city: addressee.city,
        zip_code: addressee.zip_code,
      },
    });
  }
}

export default new NewOrderMail();
