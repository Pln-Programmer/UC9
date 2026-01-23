import PostModel from "../models/PostModel.js";

export default class PostController{

    static async Criar(req, res){
        try {
            const { user_id, texto} = req.body
            if(!user_id || !texto){
                return res.status(404).json({msg: "Dados obrigatórios não fornecidos"})
            }
            const post = await PostModel.Criar(user_id, texto)
            res.status(201).json({msg: "Post criado com sucesso.", post})

        } catch (error) {
            res.status(500).json({msg: "Erro ao criar o Post", erro: error.message})
        }
    }

    static async Atualizar(req, res){
        try {
            const { id } = req.params
            const { user_id, texto} = req.body
            if(!user_id || !texto){
                return res.status(404).json({msg: "Dados obrigatórios não fornecidos"})
            }
            const post = await PostModel.Atualizar(parseInt(id), user_id, texto)
            res.status(201).json({msg: "Post atualziado com sucesso.", post})
        } catch (error) {
            res.status(500).json({msg: "Erro ao atualizar o Post", erro: error.message})
        }
    }

    static async Deletar(req, res){
        try {
            const { id } = req.params
            const post = await PostModel.Deletar(parseInt(id))
            if(!post || post.length === 0){
                return res.status(404).json({msg: "Nenhum Post cadastrado"})
            }
            res.status(201).json({msg: "Post deletado com sucesso.", post})
        } catch (error) {
            res.status(500).json({msg: "Erro ao deletar o Post", erro: error.message})
        }
    }

    static async Listar(req, res){
        try {
            const post = await PostModel.Listar()
            if(!post || post.length === 0){
                return res.status(404).json({msg: "Nenhum Post cadastrado"})
            }
            res.status(201).json({msg: "Post encontrado", post})
        } catch (error) {
            res.status(500).json({msg: "Erro ao listar o Post", erro: error.message})
        }
    }
}