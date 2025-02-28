"use client";

import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioCliente from "@/app/components/usuario/FormularioCliente";
import ListaClientes from "@/app/components/usuario/ListaClientes";
import useClientes from "@/app/data/hooks/useClientes";
import { IconPlus, IconUsers } from "@tabler/icons-react";

export default function PageClientes() {
    const { cliente, clientes, salvar, excluir, alterarCliente } = useClientes()
    
    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo
                icone={IconUsers}
                principal="Clientes"
                secundario="Cadastro de clientes"
            />
            {cliente ? (
                <FormularioCliente
                    cliente={cliente}
                    onChange={alterarCliente}
                    salvar={salvar}
                    cancelar={() => alterarCliente(null)}
                    excluir={excluir}
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button
                            className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
                            onClick={() => alterarCliente({})}
                        >
                            <IconPlus />
                            <span>Novo Cliente</span>
                        </button>
                    </div>
                    <ListaClientes clientes={clientes} onClick={alterarCliente} />
                </>
            )}
        </Pagina>
    );
}
