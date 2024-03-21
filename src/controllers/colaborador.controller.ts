import { ColaboradorOutput } from "../adapters/colaborador";
import { ColaboradorProps } from "../entities/props/colaborador.props";
import { IColaboradorGateway } from "../interfaces";
import { ColaboradorUseCases } from "../usecases/colaborador";

export class ColaboradorController {
	
	static async CriarColaborador(
		colaboradorGateway: IColaboradorGateway,
		colaboradorProps: ColaboradorProps
	): Promise<ColaboradorOutput> {
		try {
			return await ColaboradorUseCases.CriarColaborador(
				colaboradorGateway,
				colaboradorProps
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
			return await ColaboradorUseCases.ValidarColaborador(
				clienteGatewayInterface,
				cpf
			);
		} catch (error) {
			throw error;
		}
	}
}
