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
            await ColaboradorGatewayInterface.ValidarEGerarToken(novoColaborador.email);

        if (colaboradorExistente) {
            throw new Error("Colaborador já cadastrado");
        }

        return ColaboradorGatewayInterface.CriarColaborador(novoColaborador.object);
    }

    static async ValidarEGerarToken(
        ColaboradorGatewayInterface: IColaboradorGateway,
        email: string
    ): Promise<string | null> {
        return ColaboradorGatewayInterface.ValidarEGerarToken(email);
    }
}