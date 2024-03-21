import { CategoriaEnum } from "../common/enum/categoria-enum";
import { Ponto } from "../entities/ponto.entity";

export interface PontoOutput {
    id?: string;
    idUsuario: number;
    dataCriacao: Date; 
}

export const PontoAdapter = {
    adaptJsonPontos: function (pontos: Ponto[]): PontoOutput[] {
        return pontos.map(function (ponto) {
            return {
                id: ponto.id,
                idUsuario: ponto.idUsuario,
                dataCriacao: ponto.dataCriacao,
            };
        });
    },
    adaptJsonPonto: function (ponto: Ponto): PontoOutput {
        return {
            id: ponto.id,
            idUsuario: ponto.idUsuario,
            dataCriacao: new Date(ponto.dataCriacao)
        };
    },
};