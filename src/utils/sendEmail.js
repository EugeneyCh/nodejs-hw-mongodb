import nodemailer from 'nodemailer';
import 'dotenv/config';

import { getEnvVar } from '../utils/getEnvVar.js';

const user = getEnvVar('UKR_NET_EMAIL');
const pass = getEnvVar('UKR_NET_PASSWORD');

const nodemailerConfig = {
  host: 'smtp.ukr.net',
  port: 465, //   25, 465, 2525
  secure: true,
  auth: {
    user,
    pass,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

export const sendEmail = (data) => {
  const email = { ...data, from: user };
  return transport.sendMail(email);
};

// import nodemailer from 'nodemailer';

// import { SMTP } from '../constants/index.js';
// import { getEnvVar } from '../utils/getEnvVar.js';

// const transporter = nodemailer.createTransport({
//   host: getEnvVar(SMTP.SMTP_HOST),
//   port: Number(getEnvVar(SMTP.SMTP_PORT)),
//   auth: {
//     user: getEnvVar(SMTP.SMTP_USER),
//     pass: getEnvVar(SMTP.SMTP_PASSWORD),
//   },
// });

// export const sendEmail = async (options) => {
//   return await transporter.sendMail(options);
// };
