const bookBusiness = require("./book-business");

const getBooks = async (request, h) => {
  const { query } = request;
  try {
    const result = await bookBusiness.list(query);
    return h.response(result).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ error: "Failed to retrieve books" }).code(500);
  }
};

const create = async (request, h) => {
  const { payload } = request;
  try {
    const result = await bookBusiness.create(payload);
    return h.response(result).code(201);
  } catch (error) {
    console.error(error);
    return h.response({ error: "Failed to create book" }).code(500);
  }
};

const findById = async (request, h) => {
  const bookId = request.params.id;
  try {
    const result = await bookBusiness.findById(bookId);
    return h.response(result).code(200);
  } catch (error) {
    console.error(error);
    return h.response({ error: "Failed to retrieve book" }).code(500);
  }
};

module.exports = {
  getBooks,
  create,
  findById,
};
