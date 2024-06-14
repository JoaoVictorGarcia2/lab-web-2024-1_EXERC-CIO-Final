const {
  getAuthors,
  create,
  findById,
  deleteById,
} = require("./author-controller");
const schema = require("./author-schema");

const plugin = {
  name: "author-v1-route",
  version: "1",
  register: (server) => {
    server.route([
      {
        method: "GET",
        path: "/authors",
        options: {
          tags: ["api", "authors"],
          description: "Lista todos autores",
          handler: getAuthors,
        },
      },
      {
        method: "GET",
        path: "/authors/{id}",
        options: {
          tags: ["api", "authors"],
          description: "Obtém os detalhes de um autor especifico",
          handler: findById,
          validate: schema.getById,
        },
      },
      {
        method: "POST",
        path: "/authors",
        options: {
          tags: ["api", "authors"],
          description: "Adiciona um novo autor",
          handler: create,
          validate: schema.createAuthorSchema,
        },
      },
      {
        method: "DELETE",
        path: "/authors/{id}",
        options: {
          tags: ["api", "authors"],
          description: "Remove um autor",
          handler: deleteById,
          validate: schema.deleteById,
        },
      },
    ]);
  },
};

module.exports = plugin;
