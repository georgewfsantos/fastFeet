import Sequelize, { Model } from 'sequelize';

class Issue extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order, {
      foreignKey: 'order_id',
    });
  }
}

export default Issue;
