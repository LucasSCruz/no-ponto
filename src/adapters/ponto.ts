import { CategoriaEnum } from "../common/enum/categoria-enum";
import { Ponto } from "../entities/ponto.entity";

export interface PontoOutput {
	id?: string;
	idUsuario: number;
	dataCriacao: Date;
}

export const PontoAdapter = {
	adaptJsonPonto: function (
		pontos: Ponto[]
	): PontoOutput[] {
		return pontos.map(function (item) {
			return {
				id: ponto.id,
				idusuario: ponto.idUsuario,
				dataCriacao: ponto.dataCriacao,
			};
		});
	},
	adaptJsonPonto: function (produto: Ponto): PontoOutput {
		return {
			id: ponto.id,
			idusuario: ponto.idUsuario,
			dataCriacao: ponto.dataCriacao,
		};
	},
};
