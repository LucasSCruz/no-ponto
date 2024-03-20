import { Cliente } from "../../../entities/colaborador.entity";
import { IClienteGateway } from "../../../interfaces";
import { ClienteOutput } from "../../../adapters/cliente";
import { ClienteMongo } from "../model/colaborador";
import { ClienteProps } from "../../../entities/props/colaborador.props";

export class ClienteRepositoryInMongo implements IClienteGateway {
	private _model;

	constructor() {
		this._model = ClienteMongo;
	}

	async CriarCliente(novoCliente: ClienteProps): Promise<ClienteOutput> {
		return await this._model.create(novoCliente);
	}

	async BuscarClientePorCPF(cpf: string): Promise<ClienteOutput | null> {
		return await this._model.findOne({ cpf });
	}

	async BuscarTodosClientes(): Promise<ClienteOutput[] | null> {
		return await this._model.find();
	}

	async DeletaClientePorCPF(cpf: string): Promise<any> {
		return await this._model.deleteOne({ cpf });
	}
}
