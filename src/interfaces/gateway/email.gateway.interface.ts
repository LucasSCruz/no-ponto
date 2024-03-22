import { EmailOutput } from "../../adapters/email";
import { EmailProps } from "../../entities/props/email.props";

export interface IEmail {
   sendEmail(emailPropos: EmailProps): Promise<void>
}