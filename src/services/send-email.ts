import { 
  nodemailerTransporter
} from '../configs/nodemailer-transporter';

interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export class SendEmailService {
  constructor(private emailOptions: EmailOptions) {}

  public async execute() {
    const { from, to, subject, html } = this.emailOptions;

    try {
      const email = await nodemailerTransporter.sendMail({
        from,
        to,
        subject,
        html
      });
  
      console.log(email);
    } catch (error) {
      console.log(error);
    }
  }
};
