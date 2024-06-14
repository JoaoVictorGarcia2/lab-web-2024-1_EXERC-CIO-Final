const repository = require("./book-repository");

const create = async (book) => {
  // Lógica de negócio para criação de livro
  return repository.save(book);
};

const list = async (filter) => {
  return repository.findAll(filter);
};

const findById = async (id) => {
  return repository.findById(id);
};

module.exports = {
  create,
  list,
  findById,
};
