import express, { Request, Response } from "express";
import { PontoRepositoryInMongo } from "../../external/mongo/repositories/ponto.repository";
import { PontoController } from "../../controllers/ponto.controller";

const router = express.Router();
const pontoRepositoryInMongo = new PontoRepositoryInMongo();

/**
 * @swagger
 * tags:
 *   name: Ponto
 */

/**
 * @swagger
 * /api/ponto:
 *   post:
 *     summary: Cria um novo ponto.
 *     tags: [Ponto]
 *     responses:
 *       201:
 *         description: Ponto criado com sucesso.
 */
router.post("/", async (req: Request, res: Response) => {
    try {
        // Fazer a chamada ao endpoint, incluindo o token no cabeçalho Authorization
        const response = await PontoController.CriarPonto(pontoRepositoryInMongo, req.body);

        // Retornar a resposta do endpoint
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
 *     responses:
 *       200:
 *         description: Ponto
 */


router.get("/token", async (req: Request, res: Response) => {
    try {
        const token = req.header('Authorization'); 
        if (!token) {
            return res.status(401).json({ error: "Token não fornecido" });
        }
        const tokenWithoutBearer = token.replace('Bearer ', '');

        const response = await PontoController.BuscarPonto(pontoRepositoryInMongo, tokenWithoutBearer);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});





module.exports = router;
