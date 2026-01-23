import express from "express";
import UserController from "../controllers/UserController.js"

const router = express.Router();

router.get('/:matricula', UserController.BuscarporMatricula);
router.get('/', UserController.Listar);
router.post('/', UserController.Criar);
router.put('/:id', UserController.Atualizar);
router.delete('/:id', UserController.Deletar);

export default router;