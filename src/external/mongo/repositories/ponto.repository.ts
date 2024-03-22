import { ObjectId } from "mongodb";
import { PontoOutput } from "../../../adapters/ponto";
import { PontoProps } from "../../../entities/props/ponto.props";
import { IPontoGateway } from "../../../interfaces/gateway/ponto.gateway.interface";
import { PontoMongo } from "../model/ponto";

export class PontoRepositoryInMongo implements IPontoGateway {

    private _model;

    constructor() {
        this._model = PontoMongo;
    }

    async CriarPonto(novoPonto: PontoProps): Promise<PontoOutput> {
        return this._model.create(novoPonto);
    }

	async BuscarPonto(PontoIDUsario: number): Promise<PontoOutput> {
        return this._model.findById(PontoIDUsario);
    }

}
