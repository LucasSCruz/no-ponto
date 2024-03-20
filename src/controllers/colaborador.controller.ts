import { ColaboradorOutput } from "../adapters/cliente";
import { ColaboradorProps } from "../entities/props/colaborador.props";
import { IColaboradorGateway } from "../interfaces";
import { IPedidoGateway } from "../interfaces/gateway/pedido.gateway.interface";
import { ColaboradorUseCases } from "../usecases/cliente";

export class ColaboradorController {

	static async CriarColaborador(
		colaboradoraboradorGateway,
		colaboradoradorProColaboradoraboradorProps
	): Promise<ColaboradorOutput> {
		try {
			return await ColaboradorUseCases.CriarColaboradorador(
				colaboradorGatewayInterface,
				colaboradoradorProColaboradoraboradorProps
			);
		} catch (error) {
			throw error;
		}
	}

	static async ValidarColaborador(
		clienteGatewayInterface: IColaboradorGateway,
		cpf: string
	): Promise<ColaboradorOutput | null> {
		try {
			return await ClienteUseCases.ValidarColaborador(
				clienteGatewayInterface,
				cpf
			);
		} catch (error) {
			throw error;
		}
	}
}
