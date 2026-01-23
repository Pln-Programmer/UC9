import ComentarioModel from "../models/ComentarioModel.js";

export default class PostController{
    
    static async Criar(req, res){
        try {
            const { user_id, post_id, texto} = req.body
            if(!user_id || !post_id || !texto){
                return res.status(404).json({msg: "Dados obrigatórios não fornecidos"})
            }
            const comentario = await ComentarioModel.Criar(user_id, post_id, texto)
            res.status(201).json({msg: "Comentario criado com sucesso.", comentario})

        } catch (error) {
            res.status(500).json({msg: "Erro ao criar o Comentario", erro: error.message})
        }
    }

    static async Atualizar(req, res){
        try {
            const { id } = req.params
            const { user_id, post_id, texto} = req.body
            if(!user_id || !post_id || !texto ){
                return res.status(404).json({msg: "Dados obrigatórios não fornecidos"})
            }
            const comentario = await ComentarioModel.Atualizar(parseInt(id), user_id, post_id, texto)
            res.status(201).json({msg: "Comentario atualziado com sucesso.", comentario})
        } catch (error) {
            res.status(500).json({msg: "Erro ao atualizar o Comentario", erro: error.message})
        }
    }

    static async Deletar(req, res){
        try {
            const { id } = req.params
            const comentario = await ComentarioModel.Deletar(parseInt(id))
            if(!comentario || comentario.length === 0){
                return res.status(404).json({msg: "Nenhum Comentario cadastrado"})
            }
            res.status(201).json({msg: "Comentario deletado com sucesso.", comentario})
        } catch (error) {
            res.status(500).json({msg: "Erro ao deletar o Comentario", erro: error.message})
        }
    }

    static async Listar(req, res){
        try {
            const comentario = await ComentarioModel.Listar()
            if(!comentario || comentario.length === 0){
                return res.status(404).json({msg: "Nenhum Comentario cadastrado"})
            }
            res.status(201).json({msg: "Comentario encontrado", comentario})
        } catch (error) {
            res.status(500).json({msg: "Erro ao listar o Comentario", erro: error.message})
        }
    }
}