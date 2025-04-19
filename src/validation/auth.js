import Joi from "joi";

import { emailRegexp } from "../constants/auth";

export const authRegisterSchema=Joi.object({
    username:Joi.string().required();
    email:Joi.string().pattern(emailRegexp).required(),
    password:Joi.string().min(6).required(),
})