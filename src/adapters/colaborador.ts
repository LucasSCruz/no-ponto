import { Colaborador } from "../entities/colaborador.entity";

export interface ColaboradorOutput {
	id?: string;
	email: string;
	senha: string;
}

export const ColaboradorAdapter = {
	adaptJsonColaborador: function (token: string) {
		return {
			token
		};
	},
};
