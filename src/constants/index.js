import path from 'path';

export const sortList = ['asc', 'desc'];
export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

export const JWT_SECRET = 'JWT_SECRET';

// export const SMTP = {
//   SMTP_HOST: 'BREVO_SMTP_HOST',
//   SMTP_PORT: 'BREVO_SMTP_PORT',
//   SMTP_USER: 'BREVO_SMTP_USER',
//   SMTP_PASSWORD: 'BREVO_SMTP_PASSWORD',
//   SMTP_FROM: 'BREVO_SMTP_FROM',
// };

export const SMTP = {
  SMTP_PASSWORD: 'UKR_NET_PASSWORD',
  SMTP_FROM: 'UKR_NET_EMAIL',
};

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');

export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUDINARY_CLOUD_NAME',
  API_KEY: 'CLOUDINARY_API_KEY',
  API_SECRET: 'CLOUDINARY_API_SECRET',
};

export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
