import { ColaboradorOutput } from "../../adapters/colaborador";
import { ColaboradorProps } from "../../entities/props/colaborador.props";

export interface IColaboradorGateway {
	CriarColaborador(clienteProps: ColaboradorProps): Promise<ColaboradorOutput>;
	ValidarEGerarToken(Email: string): Promise<string | null>;
}
