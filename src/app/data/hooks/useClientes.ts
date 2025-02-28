import Backend from "@/backend";
import { Cliente } from "@/core/model/Cliente";
import { useEffect, useState } from "react";

export default function useClientes() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [cliente, setCliente] = useState<Partial<Cliente> | null>(null);

    useEffect(() => {
        Backend.clientes.obter().then(setClientes);
    }, []);

    async function salvar() {
        // Salvar o cliente no banco de dados
        if (!cliente) return;
        await Backend.clientes.salvar(cliente);
        const clientes = await Backend.clientes.obter();
        console.log(cliente);
        setClientes(clientes);
        setCliente(null);
    }

    async function excluir() {
        // Excluir o cliente no banco de dados
        if (!cliente || !cliente.id) return;
        await Backend.clientes.excluir(cliente.id);
        const clientes = await Backend.clientes.obter();
        setClientes(clientes);
        setCliente(null);
    }

    return {
        clientes,
        cliente,
        salvar,
        excluir,
        cancelar: () => setCliente(null),
        alterarCliente: (cliente: Partial<Cliente> | null) => setCliente(cliente),
    };
}
