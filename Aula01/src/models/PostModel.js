import prisma from "../infra/Prisma.js"

export default class PostModel {

    static async Criar(user_id, texto) {
        return prisma.post.create(
            {
                data: {user_id, texto}
            }
        )
    }

    static async Atualizar(id, user_id, texto) {
        return prisma.post.update(
            {
                where: {id},
                data: {user_id, texto}
            }
        )
    }

    static async Deletar(id) {
        return prisma.post.delete(
            {
                where: {id}
            }
        )
    }

    static async Listar() {
        return prisma.post.findMany(
            {
                include: {comentario: true, user: true}
            }
        )
    }

}