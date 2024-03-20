import { ColaboradorProps } from './props/colaborador.props';
import { Email } from './valuesObjects/email';
import { CPF } from './valuesObjects/cpf';

export class Colaborador {
    private _id?: string | undefined;
    private _email: Email;
    private _senha: string

    constructor(coloaboradorProps: ColaboradorProps) {
        if (coloaboradorProps.id) {
            this._id = coloaboradorProps.id;
        }
        this._senha = coloaboradorProps.senha;
        this._email = new Email(coloaboradorProps.email);
    }

    get id(): string | undefined {
        return this._id;
    }

    get senha(): string {
        return this.senha;
    }

    get email(): string {
        return this._email.email;
    }

    get object(): ColaboradorProps {
        return {
            id: this._id,
            senha: this._senha,
            email: this._email.email,
        }
    }

    set id(id: string) {
        this._id = id;
    }
}