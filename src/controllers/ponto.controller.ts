import { PontoOutput } from "../adapters/ponto";
import { PontoProps } from "../entities/props/ponto.props";
import { IPontoGateway } from "../interfaces/gateway/ponto.gateway.interface";
import { PontoUseCases } from "../usecases/ponto";

export class PontoController {
	static async CriarPonto(
		prontoGatewayInterface: IPontoGateway,
		prontoProps: PontoProps
	): Promise<PontoOutput> {
		try {
			return await PontoUseCases.CriarPonto(
				prontoGatewayInterface,
				prontoProps
			);
		} catch (error) {
			throw error;
		}
	}

	static async BuscarPonto(
		pontoGateway: IPontoGateway,
		idUsuario: number
	): Promise<PontoOutput | null> {
		try {
			return await PontoUseCases.BuscarPonto(
				pontoGateway,
				idUsuario
			);
		} catch (error) {
			throw error;
		}
	}

}
