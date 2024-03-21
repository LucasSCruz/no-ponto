import { ColaboradorProps } from './props/colaborador.props';

export class Colaborador {
    private _id?: string | undefined;
    private _email: string;
    private _senha: string

    constructor(coloaboradorProps: ColaboradorProps) {
        if (coloaboradorProps.id) {
            this._id = coloaboradorProps.id;
        }
        this._senha = coloaboradorProps.senha;
        this._email = coloaboradorProps.email;
    }

    get id(): string | undefined {
        return this._id;
    }

    get senha(): string {
        return this.senha;
    }

    get email(): string {
        return this._email;
    }

    get object(): ColaboradorProps {
        return {
            id: this._id,
            senha: this._senha,
            email: this._email,
        }
    }

    set id(id: string) {
        this._id = id;
    }
}