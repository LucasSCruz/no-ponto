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

	static async BuscarPontoPorDescricao(
		PontoGatewayInterface: IPontoGateway,
		descricao: string
	): Promise<PontoOutput | null> {
		try {
			return await PontoUseCases.BuscarPontoPorDescricao(
				pontoGatewayInterface,
				descricao
			);
		} catch (error) {
			throw error;
		}
	}

}
