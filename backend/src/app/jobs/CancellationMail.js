import Mail from '../../lib/Mail';

class CancellationMail {
  // each job needs a unique key ( usually I use the name of the class as the key)
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { order } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${order.deliverer.name} <${order.deliverer.email}>`,
      subject: 'Delivery canceled !',
      template: 'cancellation',
      context: {
        deliverer: order.deliverer.name,
        name: order.addressee.name,
        product: order.product,
        street: order.addressee.street,
        number: order.addressee.number,
        complement: order.addressee.complement,
        state: order.addressee.state,
        city: order.addressee.city,
        zip_code: order.addressee.zip_code,
      },
    });
  }
}

export default new CancellationMail();
