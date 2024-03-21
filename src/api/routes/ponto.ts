import express, { Request, Response } from "express";
import { PontoRepositoryInMongo } from "../../external/mongo/repositories/ponto.repository";
import { PontoController } from "../../controllers/ponto.controller";
import { resolve } from "path";

const router = express.Router();
const produtoRepositoryInMongo = new PontoRepositoryInMongo();

/**
 * @swagger
 * tags:
 *   name: Produto
 */

/**
 * @swagger
 * /api/ponto:
 *   post:
 *     summary: Cria um novo ponto.
 *     tags: [Produto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *               valor:
 *                 type: number
 *               categoria:
 *                 type: string
 *             example:
 *               descricao: Sorvetinho
 *               valor: 1.50
 *               categoria: sobremesa
 *     responses:
 *       201:
 *         description: Ponto criado com sucesso.
 */
router.post("/", async (req: Request, res: Response) => {
	try {
		const response = await PontoController.CriarPonto(pontoRepositoryInMongo, req.body);
		res.status(201).send(response);
		return;
	} catch (err: any) {
		res.status(400).send({ message: err?.message })
		return;
	}
});



/**
 * @swagger
 * /api/produtos/descricao/{descricao}:
 *   get:
 *     summary: Lista ponto
 *     tags: [Produto]
 *     parameters:
 *       - in: path
 *         name: descricao
 *         required: true
 *         schema:
 *           type: string
 *         description: Descricao do produto a ser retornado.
 *     description: Retorna produto com a descricao informada.
 *     responses:
 *       200:
 *         description: Produto encontrado
 */
router.get("/descricao/:descricao", async (req, res) => {
	res.setHeader("Content-type", "application/json");

	const response = await PontoController.BuscarProdutoPorDescricao(
		pontoRepositoryInMongo,
		req.params.descricao
	);

	res.json(response);
	return;
});

module.exports = router;
