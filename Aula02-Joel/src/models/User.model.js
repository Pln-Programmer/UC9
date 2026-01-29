import { users } from "../data/data.js"

export default class UserModel{

    static listarUsuaios(){
        return users;
    }

    static buscarPorId(id){
        const user = users.find(u => u.id === parseInt(id))
        return user
    }

    static criar(nome, email, telefone){
        const novoUsuario = {
            nome: nome,
            email: email,
            telefone: telefone
        }
        users.push(novoUser);
        return novoUser;
    }

    static atualizar(id, nome, email, telefone){
        const index = users.findIndex(u => u.id === parseInt(id))
        if(index===-1){
            return false
        }
        const novoUsuario = {
            nome: nome,
            email: email,
            telefone: telefone
        }
        return users[index]
    }

    static deletar(id){
        const index = users.findIndex(u => u.id === parseInt(id))
        if(index===-1){
            return false
    }
    users.splice(index, 1)
    return true
}
}