const Sequelize = require("sequelize");
const database = require("../../../config/db");
const Author = require("../authors/author-model");

const Book = database.sequelize.define(
  "Book",
  {
    id: {
      type: Sequelize.STRING,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "titulo",
    },
    authorId: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "autor_id",
      references: {
        model: "Author",
        key: "id",
      },
    },
    publishedDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      field: "data_publicacao",
    },
    isbn: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "isbn",
    },
    summary: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "resumo",
    },
  },
  {
    timestamps: false,
    tableName: "tb_livro",
  }
);

Book.belongsTo(Author, { foreignKey: "authorId" });

module.exports = Book;
