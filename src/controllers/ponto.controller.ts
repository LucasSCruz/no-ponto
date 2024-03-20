import { PontoOutput } from "../adapters/ponto";
import { PontoProps } from "../entities/props/ponto.props";
import { IPontoGateway } from "../interfaces/gateway/ponto.gateway.interface";
import { PontoUseCases } from "../usecases/ponto";

export class PontoController {
	static async CriarProduto(
		produtoGatewayInterface: IPontoGateway,
		produtoProps: PontoProps
	): Promise<PontoOutput> {
		try {
			return await PontoUseCases.CriarProduto(
				produtoGatewayInterface,
				produtoProps
			);
		} catch (error) {
			throw error;
		}
	}

	static async BuscarProdutoPorDescricao(
		produtoGatewayInterface: IPontoGateway,
		descricao: string
	): Promise<PontoOutput | null> {
		try {
			return await PontoUseCases.BuscarProdutoPorDescricao(
				produtoGatewayInterface,
				descricao
			);
		} catch (error) {
			throw error;
		}
	}

}
