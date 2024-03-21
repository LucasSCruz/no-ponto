import { PontoProps } from './props/ponto.props';

export class Ponto {
    private _id?: string;
    private _idUsuario: number;
    private _dataCriacao: Date;
    private _descricao: string;

    constructor(pontoProps: PontoProps) {
        this._id = pontoProps.id;
        this._idUsuario = pontoProps.idUsuario;
        this._dataCriacao = pontoProps.dataCriacao || new Date();
        this._descricao = pontoProps.descricao; 
    }

    get id(): string | undefined {
        return this._id;
    }

    get idUsuario(): number {
        return this._idUsuario;
    }

    get dataCriacao(): Date {
        return this._dataCriacao;
    }

    get descricao(): string {
        return this._descricao;
    }

    get object(): PontoProps {
        return {
            id: this._id,
            idUsuario: this._idUsuario,
            dataCriacao: this._dataCriacao,
            descricao: this._descricao // Ensure descricao property is included
        };
    }

    set id(id: string) {
        this._id = id;
    }
}