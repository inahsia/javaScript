import Joi from 'joi';

export const createProductSchema=Joi.object({
  name:Joi.string()
  .min(3)
  .max(100)
  .required(),

  description:Joi.string()
  .min(5)
  .required(),
  price:Joi.number()
  .min(0)
  .required(),

  category:Joi.string()
  .required(),

  stock:Joi.number()
  .integer()
  .min(0)
  .required()
})