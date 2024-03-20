import { Colaborador } from "../entities/colaborador.entity";

export interface ColaboradorOutput {
	id?: string;
	email: string;
	senha: string;
}

export const ColaboradorAdapter = {
	adaptJsonColaboradores: function (
		colaboradores: Colaborador[] | null
	): ColaboradorOutput[] | null {
		if (colaboradores === null) {
			return null;
		}

		return colaboradores.map(function (item) {
			return {
				id: item.id,
				email: item.email,
				senha: item.senha,
			};
		});
	},
	adaptJsonColaborador: function (cliente: Colaborador): ColaboradorOutput {
		return {
			id: cliente.id,
			email: cliente.email,
			senha: cliente.senha,
		};
	},
};
