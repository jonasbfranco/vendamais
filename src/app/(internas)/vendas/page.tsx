import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import { IconShoppingCart } from "@tabler/icons-react";

export default function PageVendas() {
    return (
        <Pagina className="flex">
            <Titulo icone={IconShoppingCart} principal="Vendas" secundario="Cadastro de vendas"/>
        </Pagina>
    )
}