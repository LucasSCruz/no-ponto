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
	static async ValidarEGerarToken(
		clienteGatewayInterface: IColaboradorGateway,
		email: string
	): Promise<string | null> {
		try {
			return await ColaboradorUseCases.ValidarEGerarToken(
				clienteGatewayInterface,
				email
			);
		} catch (error) {
			throw error;
		}
	}
}
