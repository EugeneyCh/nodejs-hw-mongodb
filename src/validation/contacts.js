import Joi from 'joi';

export const contactAddSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  phoneNumber: Joi.string().required(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
