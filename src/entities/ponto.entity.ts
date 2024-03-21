import { PontoProps } from './props/ponto.props';

export class Ponto {
    private _id?: string | undefined;
    private _idUsuario: number;
    private _dataCriacao: Date

    constructor(pontoProps: PontoProps) {
        if (pontoProps.id) {
            this._id = pontoProps.id;
        }
        this._idUsuario = pontoProps.idUsuario;
        this._dataCriacao = new Date
    }

    get id(): string | undefined {
        return this._id;
    }

    get idUsuario(): number {
        return this.idUsuario;
    }

    get dataCriacao(): Date {
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