import nodemailer from 'nodemailer';
import { EmailProps } from '../../entities/props/email.props';
import { IEmail } from '../../interfaces/gateway/email.gateway.interface';

export class EmailService implements IEmail {
    async sendEmail(emailProps: EmailProps): Promise<void> {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: '', 
                pass: '' 
            }
        });

        const mailOptions = {
            from: 'igor.fanticheli@gmail.com',
            to: emailProps.to, 
            subject: emailProps.subject, 
            text: emailProps.message 
        };

        try {
          const validate =  await transporter.sendMail(mailOptions);
          console.log(validate)
          console.info('Sucess')
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
        }
    }
}