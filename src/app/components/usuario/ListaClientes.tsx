import LinhaCliente from "./LinhaCliente";
import { Cliente } from "@/core/model/Cliente";

export interface ListaClienteProps {
    clientes: Cliente[];
    onClick?: (cliente: Cliente) => void;
}

export default function ListaClientes(props: ListaClienteProps) {
    return (
        <div className="flex flex-col gap-4">
            {props.clientes.map((cliente: Cliente) => {
                return <LinhaCliente key={cliente.id} cliente={cliente} onClick={props.onClick}/>;
            })}
        </div>
    );
}
