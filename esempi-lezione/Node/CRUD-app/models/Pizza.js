import { Sequelize } from "sequelize"; 
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Pizza = db.define('pizzas', {
  flavour: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  }
}, {
  freezeTableName: true
});
 
export default Pizza;