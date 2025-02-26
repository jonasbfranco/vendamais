import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import { IconUsers } from "@tabler/icons-react";

export default function PageClientes() {
    return (
        <Pagina className="flex">
            <Titulo icone={IconUsers} principal="Clientes" secundario="Cadastro de clientes"/>
        </Pagina>
    )
}