const Joi = require("joi");

const createBookSchema = {
  payload: Joi.object({
    title: Joi.string().min(3).max(100).required(),
    authorId: Joi.string().required(),
    publishedDate: Joi.date().iso().optional(),
    isbn: Joi.string().optional(),
    summary: Joi.string().max(1000).optional(),
  }),
};

const getById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const getBooks = {
  query: Joi.object({
    title: Joi.string().min(1).optional(),
    authorName: Joi.string().min(1).optional(),
  }),
};

module.exports = {
  createBookSchema,
  getById,
  getBooks,
};
