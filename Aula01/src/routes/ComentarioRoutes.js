import express from "express";
import ComentarioController from "../controllers/ComentarioController.js"

const router = express.Router();

router.get('/', ComentarioController.Listar);
router.post('/', ComentarioController.Criar);
router.put('/:id', ComentarioController.Atualizar);
router.delete('/:id', ComentarioController.Deletar);

export default router;