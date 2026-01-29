import express from "express";
import UserController from "../controllers/User.controller.js";

const router = express.Router();

/**
 * @openapi
 * /user:
 *   get:
 *     summary: Listar usuários
 *     tags:
 *       - Usuários
 *     responses:
 *       200:
 *         description: Usuários encontrados.
 */

router.get("/", UserController.listarUsuarios);

/**
 * @openapi
 * /user/{id}:
 *   get:
 *     summary: Buscar usuário por ID
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Usuário encontrado.
 *         content:
 *           application/json:
 *             example:
 *               msg: "Usuário encontrado"
 *               usuario:
 *                 id: 1
 *                 nome: "Pedro"
 *                 email: "pedro@gmail.com"
 *                 telefone: "(84) 98273-6473"
 *       404:
 *         description: Usuário não encontrado.
 */

router.get("/:id", UserController.buscarPorId);

router.post("/", UserController.criar);
router.put("/:id", UserController.atualizar);
router.delete("/:id", UserController.deletar);

export default router;
