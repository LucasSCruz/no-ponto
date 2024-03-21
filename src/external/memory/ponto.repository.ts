import { PontoAdapter, PontoOutput } from "../../adapters/ponto";
import { Ponto } from "../../entities/ponto.entity";
import { PontoProps } from "../../entities/props/ponto.props";
import { IPontoGateway } from "../../interfaces/gateway/ponto.gateway.interface";

export class PontoRepositoryInMemory implements IPontoGateway {
	private ponto: Ponto[] = [];

	async CriarProduto(produtoProps: PontoProps): Promise<PontoOutput> {
		const produto = new Ponto(produtoProps);
		this.ponto.push(produto);
		return PontoAdapter.adaptJsonPonto(produto);
	}

	async BuscarPontoPorID(
		idUsuario: number
	): Promise<PontoOutput | null> {
		const produtoExistente = this.ponto.find(
			(ponto) => ponto.idUsuario === idUsuario
		);

		if (!produtoExistente) {
			return null;
		}

		return PontoAdapter.adaptJsonPonto(produtoExistente);
	}
}
