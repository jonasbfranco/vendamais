import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import { IconWallet } from "@tabler/icons-react";

export default function PageParcelas() {
    return (
        <Pagina className="flex">
            <Titulo icone={IconWallet} principal="Parcelas" secundario="Cadastro de parcelas"/>
        </Pagina>
    )
}