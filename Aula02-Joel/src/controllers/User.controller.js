import UserModel from "../models/User.model.js";

export default class UserController{

    static listarUsuarios(req, res){
        try {
            const user = UserModel.listarUsuaios()
        if(!user || user.length === 0){
            return res.status(400).json({msg: "Nenhum usuário no banco"})
        }
        res.status(200).json({msg: "Usuário encontrados", user})
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao listar os usuários", erro: error.message})
        }
        }
        
        static buscarPorId(req,res){
            try {
                const {id} = req.params
                const user = UserModel.buscarPorId(id)
                if(!user){
                    return res.status(404).json({msg: "Usuário encontrado."})
                }
                res.status(200).json({msg: "Usuário encontrado.", user})
            } catch (error) {
                res.status(500).json({msg: "Erro interno ao listar pelo id", erro: error.message})
            }
        }

        static criar(req, res){
            try {
                const {nome, email, telefone} = req.body;
                if(!nome || !email || !telefone){
                    return res.status(400).json({msg: "Todos os campos devem ser preenchidos"})
                }
                const novoUser = UserModel.criar(nome, email, telefone)
                res.status(201).json({msg: "Usuário criado com sucesso", novoUser})
            } catch (error) {
                res.status(500).json({msg: "Erro interno ao criar", erro: error.message})
            }
        }

        static atualizar(req, res){
            try {
                const {id} = req.params
                const {nome, email, telefone} = req.body;
                if(!nome || !email || !telefone){
                    return res.status(400).json({msg: "Todos os campos devem ser preenchidos"})
                }
                const userAtualizado = UserModel.atualizar(id, nome, email, telefone)
                if(!userAtualizado){
                    res.status(404).json({msg: "Usuário atualizado com sucesso.", userAtualizado})
                }
            } catch (error) {
                res.status(500).json({msg: "Erro interno ao atualizar", erro: error.message})
            }
        }

        static deletar(req,res){
            try {
                const {id} = req.params
                const deletado = UserModel.deletar(id)
                if(!deletado){
                    return res.status(404).json({msg: "Usuário não encontrado"})
                }
                res.status(201).json({msg: "Usuário deletado com sucesso!"})
            } catch (error) {
                res.status(500).json({msg: "Erro interno ao deletar", erro: error.message})
            }
            

        }
    }
     
