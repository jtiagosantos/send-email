export const CONSTANTS = {
  NODEMAILER: {
    HOST: 'smtp.mailtrap.io',
    PORT: 2525,
    AUTH: {
      USER: process.env.NODEMAILER_USER,
      PASS: process.env.NODEMAILER_PASS, 
    },
  },
};
