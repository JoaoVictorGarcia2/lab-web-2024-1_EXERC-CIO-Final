const Sequelize = require("sequelize");
const database = require("../../../config/db");

const Author = database.sequelize.define(
  "Author",
  {
    id: {
      type: Sequelize.STRING,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "nome",
    },
    biography: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "biografia",
    },
    birthDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      field: "data_nascimento",
    },
  },
  {
    timestamps: false,
    tableName: "tb_autor",
  }
);

module.exports = Author;
