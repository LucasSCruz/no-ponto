import { EmailProps } from "../entities/props/email.props";
import { IEmail } from "../interfaces/gateway/email.gateway.interface";

export class RegistrationConfirmationEmailUseCase {
    constructor(private emailService: IEmail) {}
  
    async execute(userEmail: string): Promise<void> {
      const emailProps: EmailProps = {
        to: userEmail,
        subject: 'Confirmação de Registro',
        message: 'Obrigado por se registrar em nosso serviço!'
      };
  
      try {
       await this.emailService.sendEmail(emailProps);
      } catch (error) {
        console.error('Erro ao enviar e-mail de confirmação:', error);
      }
    }
  }

