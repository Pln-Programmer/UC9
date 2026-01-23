import prisma from "../infra/Prisma.js"

export default class ComentarioModel {

    static async Criar(user_id, post_id, texto) {
        return prisma.comentario.create(
            {
                data: {user_id, post_id, texto}
            }
        )
    }

    static async Atualizar(id, user_id, post_id, texto) {
        return prisma.comentario.update(
            {
                where: {id},
                data: {user_id, post_id, texto}
            }
        )
    }

    static async Deletar(id) {
        return prisma.comentario.delete(
            {
                where: {id}
            }
        )
    }

    static async Listar() {
        return prisma.comentario.findMany(
            {
                include: {user: true, post: true}
            }
        )
    }
}