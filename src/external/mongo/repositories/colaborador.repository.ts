import { Colaborador } from "../../../entities/colaborador.entity";
import { IColaboradorGateway } from "../../../interfaces";
import { ColaboradorOutput } from "../../../adapters/colaborador";
import { ColaboradorMongo } from "../model/colaborador";
import { ColaboradorProps } from "../../../entities/props/colaborador.props";
import jwt from "jsonwebtoken";

export class ColaboradorRepositoryInMongo implements IColaboradorGateway {
	private _model;

	constructor() {
		this._model = ColaboradorMongo;
	}  

	async CriarColaborador(novoCliente: ColaboradorProps): Promise<ColaboradorOutput> {
		return await this._model.create(novoCliente);
	}

	async  ValidarEGerarToken(email: string): Promise<string | null> {
		const colaborador: ColaboradorOutput | null = await this._model.findOne({ email });
	
		if (colaborador) {
			const payload = {
				id: colaborador.id
			};

			const token = jwt.sign(payload, 'ChaveDeAcesso', { expiresIn: '1h' });
			return token;

		} else {
			return null;
		}
	}
}
