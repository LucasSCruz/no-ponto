import axios from "axios";
import { ColaboradorOutput } from "../adapters/colaborador";
import { Colaborador } from "../entities/colaborador.entity";
import { ColaboradorProps } from "../entities/props/colaborador.props";
import { IColaboradorGateway } from "../interfaces/gateway/colaborador.gateway.interface";

export class ColaboradorUseCases {
    static async CriarColaborador(
        ColaboradorGatewayInterface: IColaboradorGateway,
        colaboradorProps: ColaboradorProps
    ): Promise<ColaboradorOutput> {
        const novoColaborador = new Colaborador(colaboradorProps);
        const colaboradorExistente =
            await ColaboradorGatewayInterface.ValidarColaborador(novoColaborador.email);

        if (colaboradorExistente) {
            throw new Error("Colaborador já cadastrado");
        }

        return ColaboradorGatewayInterface.CriarColaborador(novoColaborador.object);
    }

    static async ValidarColaborador(
        ColaboradorGatewayInterface: IColaboradorGateway,
        CPF: string
    ): Promise<ColaboradorOutput | null> {
        return ColaboradorGatewayInterface.ValidarColaborador(CPF);
    }
}