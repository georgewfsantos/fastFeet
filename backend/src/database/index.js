import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Deliverer from '../app/models/Deliverer';
import Order from '../app/models/Order';
import Addressee from '../app/models/Addressee';
import Issue from '../app/models/Issue';

import databaseConfig from '../config/database';

const models = [User, File, Deliverer, Order, Addressee, Issue];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
