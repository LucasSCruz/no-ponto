import { PontoOutput } from "../adapters/ponto";
import { Ponto } from "../entities/ponto.entity";
import { PontoProps } from "../entities/props/ponto.props";
import { IPontoGateway } from "../interfaces/gateway/ponto.gateway.interface";

export class PontoUseCases {
	static async CriarPonto(PontoGatewayInterface: IPontoGateway, PontoProps: PontoProps): Promise<PontoOutput> {
		try {
			const novoPonto = new Ponto(PontoProps);
	
			return await PontoGatewayInterface.CriarPonto(novoPonto.object);
		} catch (error) {
			throw error;
		}
	}
  
	static async BuscarPonto(
		PontoGatewayInterface: IPontoGateway,
		idUsuario: number
	): Promise<PontoOutput | null> {
		return PontoGatewayInterface.BuscarPonto(idUsuario);
	}
}
