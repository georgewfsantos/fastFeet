import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Deliverer, {
      foreignKey: 'deliverer_id',
      as: 'deliverer',
      // foreignKey => name of the column in the orders table where the  id coming from the relation model will be stored.
    });
    this.belongsTo(models.Addressee, {
      foreignKey: 'addressee_id',
      as: 'addressee',
    });
    this.belongsTo(models.File, {
      foreignKey: 'signature_id',
      as: 'signature',
    });
  }
}

export default Order;
