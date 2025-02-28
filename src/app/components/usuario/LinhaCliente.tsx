import { Cliente } from "@/core/model/Cliente"
import Avatar from "./AvatarCliente"

export interface LinhaClienteProps {
    cliente: Cliente
    onClick?: (cliente: Cliente) => void
}

export default function LinhaCliente(props: LinhaClienteProps) {
    return (
        <div onClick={() => props.onClick?.(props.cliente)} className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer">
            <Avatar cliente={{ nome: props.cliente.nome }} />
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.cliente.nome}</span>
                <span className="text-sm text-zinc-400">{props.cliente.whatsapp}</span>
                <span className="text-sm text-zinc-400">{props.cliente.cidade}</span>
            </div>
        </div>
    )
}