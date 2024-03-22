import { PontoOutput } from "../../adapters/ponto";
import { PontoProps } from "../../entities/props/ponto.props";

export interface IPontoGateway {
    CriarPonto(PontoProps: PontoProps): Promise<PontoOutput>;
    BuscarPonto(PontoIDUsario: number): Promise<PontoOutput>;
}