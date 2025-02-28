import { Cliente } from "@/core/model/Cliente";
import { PrismaClient } from "@prisma/client";

export default class RepositorioCliente {
    private static db: PrismaClient = new PrismaClient();

    static async salvar(cliente: Cliente): Promise<Cliente> {
        return await this.db.cliente.upsert({
            where: { id: cliente.id },
            update: cliente,
            create: cliente,
        });
    }

    static async obterTodos(): Promise<Cliente[]> {
        const cliente = await this.db.cliente.findMany();

        return cliente as Cliente[];
    }

    static async obterPorId(id: string): Promise<Cliente> {
        const cliente = await this.db.cliente.findUnique({
            where: { id },
        });

        return cliente as Cliente;
    }

    static async excluir(id: string): Promise<void> {
        await this.db.cliente.delete({ where: { id } });
    }
}
