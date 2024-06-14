const authorBusiness = require("./author-business");

const getAuthors = async (request, h) => {
  const { query } = request;
  try {
    const result = await authorBusiness.list(query);
    return h.response(result).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ error: "Falha na busca dos autores"}).code(500);
  }
};

const create = async (request, h) => {
  const { payload } = request;
  try {
    const result = await authorBusiness.create(payload);
    return h.response(result).code(201);
  } catch (error) {
    console.error(error);
    return h.response({ error: "Falha ao cadastrar um autor"}).code(500);
  }
};

const findById = async (request, h) => {
  const authorId = request.params.id;
  try {
    const result = await authorBusiness.findById(authorId);
    return h.response(result).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ error: "Falha na busca dos autores"}).code(500);
  }
};

const deleteById = async (request, h) => {
  const authorId = request.params.id;
  try {
    await authorBusiness.deleteById(authorId);
    return h.response({}).code(204);
  } catch (error) {
    console.error(error);
    return h.response({ error: "Falha ao remover autor"}).code(500);
  }
};

module.exports = {
  getAuthors,
  create,
  findById,
  deleteById,
};
