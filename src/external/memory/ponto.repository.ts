import { PontoAdapter, PontoOutput } from "../../adapters/ponto";
import { Ponto } from "../../entities/ponto.entity";
import { PontoProps } from "../../entities/props/ponto.props";
import { IPontoGateway } from "../../interfaces/gateway/ponto.gateway.interface";

export class PontoRepositoryInMemory implements IPontoGateway {
	CriarPonto(pontoProps: PontoProps): Promise<PontoOutput> {
		throw new Error("Method not implemented.");
	}
	private ponto: Ponto[] = [];

	async CriarProduto(pontoProps: PontoProps): Promise<PontoOutput> {
		const produto = new Ponto(pontoProps);
		this.ponto.push(produto);
		return PontoAdapter.adaptJsonPonto(produto);
	}

	async BuscarPontoPorID(pontoID: string): Promise<PontoOutput> {
		const pontoExistente = this.ponto.find(
			(ponto) => ponto.id === pontoID
		);

		if (!pontoExistente) {
			throw new Error("Ponto não encontrado");
		}

		return PontoAdapter.adaptJsonPonto(pontoExistente);
	}
}