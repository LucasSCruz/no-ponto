import { PontoOutput } from "../adapters/ponto";
import { PontoProps } from "../entities/props/ponto.props";
import { IPontoGateway } from "../interfaces/gateway/ponto.gateway.interface";
import { PontoUseCases } from "../usecases/ponto";
import jwt from "jsonwebtoken";

export class PontoController {
	static async CriarPonto(
		prontoGatewayInterface: IPontoGateway,
		prontoProps: string,
	): Promise<PontoOutput> {
		try {
		    const decodedToken: any = jwt.verify(prontoProps, 'suaChaveSecreta');
		    const idUsuario = decodedToken.idUsuario;

			return await PontoUseCases.CriarPonto(
				prontoGatewayInterface,
				idUsuario
			);
		} catch (error) {
			throw error;
		}
	}

	static async BuscarPonto(
		pontoGateway: IPontoGateway,
		token: string
	): Promise<PontoOutput | null> {
		try {
			const decodedToken: any = jwt.verify(token, 'suaChaveSecreta');
		    const idUsuario = decodedToken.idUsuario;

			return await PontoUseCases.BuscarPonto(
				pontoGateway,
				idUsuario
			);
		} catch (error) {
			throw error;
		}
	}

}
