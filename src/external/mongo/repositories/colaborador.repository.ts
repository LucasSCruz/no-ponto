import { Colaborador } from "../../../entities/colaborador.entity";
import { IColaboradorGateway } from "../../../interfaces";
import { ColaboradorOutput } from "../../../adapters/colaborador";
import { ColaboradorMongo } from "../model/colaborador";
import { ColaboradorProps } from "../../../entities/props/colaborador.props";

export class ColaboradorRepositoryInMongo implements IColaboradorGateway {
	private _model;

	constructor() {
		this._model = ColaboradorMongo;
	}

	async CriarColaborador(novoCliente: ColaboradorProps): Promise<ColaboradorOutput> {
		return await this._model.create(novoCliente);
	}

	async ValidarColaborador(cpf: string): Promise<ColaboradorOutput | null> {
		return await this._model.findOne({ cpf });
	}
}
