const { getBooks, create, findById } = require("./book-controller");
const schema = require("./book-schema");

const plugin = {
  name: "book",
  version: "1",
  register: (server) => {
    server.route([
      {
        method: "GET",
        path: "/books",
        options: {
          tags: ["api", "books"],
          description: "Lista todos os livros",
          handler: getBooks,
          validate: schema.getBooks,
        },
      },
      {
        method: "GET",
        path: "/books/{id}",
        options: {
          tags: ["api", "books"],
          description: "Obtém os detalhes de um livro especifico",
          handler: findById,
          validate: schema.getById,
        },
      },
      {
        method: "POST",
        path: "/books",
        options: {
          tags: ["api", "books"],
          description: "Adiciona um novo livro",
          handler: create,
          validate: schema.createBookSchema,
        },
      },
    ]);
  },
};

module.exports = plugin;
