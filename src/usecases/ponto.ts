import { PontoOutput } from "../adapters/ponto";
import { Ponto } from "../entities/ponto.entity";
import { PontoProps } from "../entities/props/ponto.props";
import { IPontoGateway } from "../interfaces/gateway/ponto.gateway.interface";

export class PontoUseCases {
	static async CriarPonto(PontoGatewayInterface: IPontoGateway, PontoProps: PontoProps): Promise<PontoOutput> {
		try {
			const pontoExistente = await PontoUseCases.BuscarPontoPorID(PontoGatewayInterface, PontoProps.descricao);
	
			if (pontoExistente) {
				throw new Error("Ponto já cadastrado com essa descrição");
			}
	
			const novoPonto = new Ponto(PontoProps);
	
			return await PontoGatewayInterface.CriarPonto(novoPonto.object);
		} catch (error) {
			throw error;
		}
	}

	static async BuscarPontoPorID(
		PontoGatewayInterface: IPontoGateway,
		id: string
	): Promise<PontoOutput | null> {
		return PontoGatewayInterface.BuscarPontoPorID(id);
	}
}
