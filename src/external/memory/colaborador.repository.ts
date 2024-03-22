import { ColaboradorAdapter, ColaboradorOutput } from "../../adapters/colaborador";
import { Colaborador } from "../../entities/colaborador.entity";
import { ColaboradorProps } from "../../entities/props/colaborador.props";
import { IColaboradorGateway } from "../../interfaces";
import jwt from "jsonwebtoken";

export class ColaboradorRepositoryInMemory implements IColaboradorGateway {
	private colaborador: Colaborador[] = [];

	async CriarColaborador(colaboradorProps: ColaboradorProps): Promise<ColaboradorOutput> {
        const novoColaborador = new Colaborador(colaboradorProps)
		this.colaborador.push(novoColaborador);
		novoColaborador.id = this.colaborador.length.toString();
		return novoColaborador.object;	
	}

	async  ValidarEGerarToken(email: string): Promise<string | null> {
		const colaborador = this.colaborador.find(colab => colab.email === email);
	
		if (colaborador) {
			const payload = {
				id: colaborador.id
			};
	
			const token = jwt.sign(payload, 'suaChaveSecreta', { expiresIn: '1h' });
			return token;
		} else {
			return null;
		}
	}
}
