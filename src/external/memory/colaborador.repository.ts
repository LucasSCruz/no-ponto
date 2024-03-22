import { ColaboradorAdapter, ColaboradorOutput } from "../../adapters/colaborador";
import { Colaborador } from "../../entities/colaborador.entity";
import { ColaboradorProps } from "../../entities/props/colaborador.props";
import { IColaboradorGateway } from "../../interfaces";

export class ColaboradorRepositoryInMemory implements IColaboradorGateway {
	private clientes: Colaborador[] = [];

	async CriarColaborador(colaboradorProps: ColaboradorProps): Promise<ColaboradorOutput> {
        const novoColaborador = new Colaborador(colaboradorProps)
		this.clientes.push(novoColaborador);
		novoColaborador.id = this.clientes.length.toString();
		return novoColaborador.object;	
	}

	async ValidarEGerarToken(email: string): Promise<ColaboradorOutput | null> {
		const cliente = this.clientes.find((cliente) => cliente.email === email);

		if (!cliente) {
			return null;
		}

		return ColaboradorAdapter.adaptJsonColaborador(cliente);
	}
}
