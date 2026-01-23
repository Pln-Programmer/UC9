import prisma from "../infra/Prisma.js"

export default class UserModel {

    static async Criar(nome, email, senha, matricula, perfil) {
        return prisma.user.create(
            {
                data: {nome, email, senha, matricula, perfil}
            }
        )
    }

    static async Atualizar(id, nome, email, senha, matricula, perfil) {
        return prisma.user.update(
            {
                where: {id},
                data: {nome, email, senha, matricula, perfil}
            }
        )
    }

    static async Deletar(id) {
        return prisma.user.delete(
            {
                where: {id}
            }
        )
    }

    static async Listar() {
        return prisma.user.findMany(
            {
                include: {comentario: true, post: true}
            }
        )
    }

    static async buscarPorMatricula(matricula) {
        return prisma.user.findUnique(
            {
                where: {matricula},
                include: {comentario: true, post: true}
            }
        )
    }
}