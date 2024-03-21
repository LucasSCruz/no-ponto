import { PontoOutput } from "../adapters/ponto";
import { Ponto } from "../entities/ponto.entity";
import { PontoProps } from "../entities/props/ponto.props";
import { IPontoGateway } from "../interfaces/gateway/ponto.gateway.interface";

export class PontoUseCases {
	static async CriarPonto(
		PontoGatewayInterface: IPontoGateway,
		PontoProps: PontoProps
	): Promise<PontoOutput> {
		const pontoExistente = await PontoUseCases.BuscarPontoPorDescricao(
			PontoGatewayInterface,
			PontoProps.dataCriacao
		);

		if (pontoExistente) {
			throw new Error("Ponto já cadastrado com essa descrição");
		}

		const novoPonto = new Ponto(PontoProps);

		return PontoGatewayInterface.CriarPonto(novoPonto.object);
	}

	static async BuscarPontoPorDescricao(
		PontoGatewayInterface: IPontoGateway,
		descricao: string
	): Promise<PontoOutput | null> {
		return PontoGatewayInterface.BuscarPontoPorDescricao(descricao);
	}
}
