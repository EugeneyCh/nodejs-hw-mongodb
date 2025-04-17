import Joi from 'joi';
import { contactType } from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email(),
  phoneNumber: Joi.string().required(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...contactType)
    .required(),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  phoneNumber: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...contactType),
});
