import axios from "axios";
import { ColaboradorOutput } from "../adapters/Colaborador";
import { Colaborador } from "../entities/Colaborador.entity";
import { ColaboradorProps } from "../entities/props/Colaborador.props";
import { IColaboradorGateway } from "../interfaces";
import { IPedidoGateway } from "../interfaces/gateway/pedido.gateway.interface";

export class ColaboradorUseCases {
	static async CriarColaborador(
		ColaboradorGatewayInterface: IColaboradorGateway,
		ColaboradorProps: ColaboradorProps
	): Promise<ColaboradorOutput> {
		const novoColaborador = new Colaborador(ColaboradorProps);
		const ColaboradorExistente =
			await ColaboradorGatewayInterface.BuscarColaboradorPorCPF(novoColaborador.cpf);

		if (ColaboradorExistente) {
			throw new Error("Colaborador já cadastrado");
		}

		return ColaboradorGatewayInterface.CriarColaborador(novoColaborador.object);
	}

	static async BuscarColaboradorPorCPF(
		ColaboradorGatewayInterface: IColaboradorGateway,
		CPF: string
	): Promise<ColaboradorOutput | null> {
		return ColaboradorGatewayInterface.BuscarColaboradorPorCPF(CPF);
	}

	static async BuscarTodosColaboradors(
		ColaboradorGatewayInterface: IColaboradorGateway
	): Promise<ColaboradorOutput[] | null> {
		return ColaboradorGatewayInterface.BuscarTodosColaboradors();
	}

	static async DeletaColaboradorPorCPF(
		ColaboradorGatewayInterface: IColaboradorGateway,
		pedidoGatewayInterface: IPedidoGateway,
		CPF: string
	): Promise<boolean> {
		const Colaborador = await ColaboradorGatewayInterface.BuscarColaboradorPorCPF(CPF);

		if (!Colaborador || !Colaborador.id) {
			throw new Error("Colaborador não encontrado");
		}

		const pedidos = await pedidoGatewayInterface.BuscarPedidosPorColaborador(Colaborador.id);

		if (pedidos) {
			for (const pedido of pedidos) {
				await axios.delete(`${process.env.WEBHOOK_DELETE_PAGAMENTOS}/${pedido.numeroPedido}`);
			}
		}

		await ColaboradorGatewayInterface.DeletaColaboradorPorCPF(CPF);

		return true;
	}
}
