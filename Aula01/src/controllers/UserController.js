import UserModel from "../models/UserModel.js";

export default class UserController{

    static async Criar(req, res){
        try {
            const { nome, email, senha, matricula, perfil } = req.body
            if(!nome || !email || !senha || !matricula || !perfil){
                return res.status(404).json({msg: "Dados obrigatórios não fornecidos"})
            }
            const user = await UserModel.Criar(nome, email, senha, matricula, perfil)
            res.status(201).json({msg: "Usuário criado com sucesso.", user})

        } catch (error) {
            res.status(500).json({msg: "Erro ao criar o Usuário", erro: error.message})
        }
    }

    static async Atualizar(req, res){
        try {
            const { id } = req.params
            const { nome, email, senha, matricula, perfil } = req.body
            if(!nome || !email || !senha || !matricula || !perfil){
                return res.status(404).json({msg: "Dados obrigatórios não fornecidos"})
            }
            const user = await UserModel.Atualizar(parseInt(id), nome, email, senha, matricula, perfil)
            res.status(201).json({msg: "Usuário atualziado com sucesso.", user})
        } catch (error) {
            res.status(500).json({msg: "Erro ao atualizar o Usuário", erro: error.message})
        }
    }

    static async Deletar(req, res){
        try {
            const { id } = req.params
            const user = await UserModel.Deletar(parseInt(id))
            if(!user || user.length === 0){
                return res.status(404).json({msg: "Nenhum Usuário cadastrado"})
            }
            res.status(201).json({msg: "Usuário deletado com sucesso.", user})
        } catch (error) {
            res.status(500).json({msg: "Erro ao deletar o Usuário", erro: error.message})
        }
    }

    static async Listar(req, res){
        try {
            const user = await UserModel.Listar()
            if(!user || user.length === 0){
                return res.status(404).json({msg: "Nenhum Usuário cadastrado"})
            }
            res.status(201).json({msg: "Usuário encontrado", user})
        } catch (error) {
            res.status(500).json({msg: "Erro ao listar o Usuário", erro: error.message})
        }
    }

    static async BuscarporMatricula(req, res){
        try {
            const { matricula } = req.params
            const user= await UserModel.buscarPorMatricula(matricula)
            if(!user || user.length === 0){
                return res.status(404).json({msg: "Nenhum Usuário cadastrado"})
            }
            res.status(201).json({msg: "Usuário encontrado", user})
        } catch (error) {
            res.status(500).json({msg: "Erro ao listar o Usuário pela matricula", erro: error.message})
        }
    }
}