import { EmailProps } from "./props/email.props";


export class Email {
    private _subject: string;

    constructor(emailProps: EmailProps) {
        this._subject = emailProps.subject;
    }


    get subject(): string {
        return this._subject;
    }

}