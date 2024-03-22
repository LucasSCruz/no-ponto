import nodemailer from 'nodemailer';
import { EmailProps } from '../../entities/props/email.props';
import { IEmail } from '../../interfaces/gateway/email.gateway.interface';

export class EmailService implements IEmail {
    async sendEmail(emailProps: EmailProps): Promise<void> {
        const transporter = nodemailer.createTransport({
            service: 'nresponsea',
            auth: {
                user: 'napoleonc05@nresponsea.com',
                pass: '35546b03f9ce91e0fc9779c8b7dc654f' 
            }
        });

        const mailOptions = {
            from: 'cassio3620@gmail', 
            to: emailProps.to, 
            subject: emailProps.subject, 
            text: emailProps.message 
        };

        try {
          await transporter.sendMail(mailOptions);
          console.info('Sucess')
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
        }
    }
}