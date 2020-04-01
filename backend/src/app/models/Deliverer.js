import Sequelize, { Model } from 'sequelize';

class Deliverer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, {
      foreignKey: 'avatar_id',
      as:
        'avatar' /* name of the column in the deliverers model(table) that will receive the file id */,
    });
  }
}

export default Deliverer;
