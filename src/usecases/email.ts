import { EmailProps } from "../entities/props/email.props";
import { IEmail } from "../interfaces/gateway/email.gateway.interface";

export class RegistrationConfirmationEmailUseCase {
    constructor(private emailService: IEmail) {}
  
    async execute(userEmail: string): Promise<void> {
      const emailProps: EmailProps = {
        to: 'lucasscruz2001@gmail.com, igor.fanticheli@gmail.com', //userEmail,
        subject: 'FIAP',
        message: 'Boa noite, foi verificado em nossos sistema que voce foi aprovado. boa noite!'
      };
  
      try {
       await this.emailService.sendEmail(emailProps);
      } catch (error) {
        console.error('Erro ao enviar e-mail de confirmação:', error);
      }
    }
  }

