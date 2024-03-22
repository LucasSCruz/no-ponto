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
 * /api/colaborador:
 *   post:
 *     summary: Cria um novo Colaborador.
 *     tags: [Colaborador]
 *     responses:
 *       201:
 *         description: Colaborador criado com sucesso.
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
 *     responses:
 *       200:
 *         description: Cliente encontrado
 */
router.get("/email/:email", async (req, res) => {
	res.setHeader("Content-type", "application/json");
	return res.json(
		await ColaboradorController.ValidarEGerarToken(colaboradorRepositoryInMongo, req.params.email)
	);
});

module.exports = router;
