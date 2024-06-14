const Joi = require("joi");

const createAuthorSchema = {
  payload: Joi.object({
    name: Joi.string().min(3).max(60).required(),
    biography: Joi.string().min(10).max(1000).optional(),
    birthDate: Joi.date().iso().optional(),
  }),
};

const getById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const deleteById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const getAuthors = {
  query: Joi.object({
    name: Joi.string().min(1).optional(),
    biography: Joi.string().min(1).optional(),
    birthDate: Joi.date().iso().optional(),
  }),
};

module.exports = {
  createAuthorSchema,
  getById,
  getAuthors,
  deleteById,
};
