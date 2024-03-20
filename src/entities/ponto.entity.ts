import { PontoProps } from './props/ponto.props';

export class Ponto {
    private _id?: string | undefined;
    private _idUsuario: number;
    private _dataCriacao: DateTime

    constructor(clienteProps: PontoProps) {
        if (clienteProps.id) {
            this._id = clienteProps.id;
        }
        this._senha = pontoProps.idUsuario;
        this._dataCriacao = new DateTime
    }

    get id(): string | undefined {
        return this._id;
    }

    get idUsuario(): string {
        return this.idUsuario;
    }

    get dataCriacao(): string {
        return this._dataCriacao;
    }

    get object(): PontoProps {
        return {
            id: this._id,
            idUsuario: this._idUsuario,
            dataCriacao: this._dataCriacao
        }
    }

    set id(id: string) {
        this._id = id;
    }
}