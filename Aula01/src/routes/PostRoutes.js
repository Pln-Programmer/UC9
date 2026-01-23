import express from "express";
import PostController from "../controllers/PostController.js"

const router = express.Router();

router.get('/', PostController.Listar);
router.post('/', PostController.Criar);
router.put('/:id', PostController.Atualizar);
router.delete('/:id', PostController.Deletar);

export default router;