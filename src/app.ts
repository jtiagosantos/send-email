import env from 'dotenv';
env.config();

import { CONSTANTS } from './constants';
import { emailTemplate } from './templates/email-template';
import { SendEmailService } from './services/send-email';

const { NODEMAILER } = CONSTANTS;
const { AUTH } = NODEMAILER;
const { USER } = AUTH;

const emailOptions = {
  from: `Tiago Santos <${USER}>`,
  to: '', // YOUR E-MAIL HERE
  subject: 'Teste nodemailer',
  html: emailTemplate,
};

(async () => {
  const sendEmail = new SendEmailService(emailOptions);

  await sendEmail.execute();
})();
