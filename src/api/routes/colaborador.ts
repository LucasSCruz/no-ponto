import express, { Request, Response } from "express";
import { ColaboradorController } from "../../controllers/colaborador.controller";
import { ColaboradorRepositoryInMongo } from "../../external/mongo/repositories/colaborador.repository";

const router = express.Router();
const colaboradorRepositoryInMongo = new ColaboradorRepositoryInMongo();

/**
 * @swagger
 * tags:
 *   name: Colaborador
 */

/**
 * @swagger
 * /api/clientes:
 *   post:
 *     summary: Cria um novo Colaborador.
 *     tags: [Cliente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               cpf:
 *                 type: string
 *             example:
 *               nome: João
 *               email: joão@joão.com.br
 *               cpf: 360.635.210-70
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 */
router.post("/", async (req: Request, res: Response) => {
	return await ColaboradorController.CriarColaborador(colaboradorRepositoryInMongo, req.body)
		.then((response: any) => {
			return res.status(201).send(response);
		})
		.catch((err: any) => {
			return res.status(400).send({ message: err?.message });
		});
});

/**
 * @swagger
 * /api/clientes/cpf/{cpf}:
 *   get:
 *     summary: Autentica Colaborador
 *     tags: [Cliente]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description: CPF do cliente a ser retornado.
 *     description: Retorna cliente com o CPF informado.
 *     responses:
 *       200:
 *         description: Cliente encontrado
 */
router.get("/cpf/:cpf", async (req, res) => {
	res.setHeader("Content-type", "application/json");
	return res.json(
		await ColaboradorController.ValidarColaborador(colaboradorRepositoryInMongo, req.params.cpf)
	);
});

module.exports = router;
