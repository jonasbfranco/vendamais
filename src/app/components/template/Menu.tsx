import {
    IconHome,
    IconLogout,
    IconShoppingCart,
    IconUsers,
    IconWallet,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <aside className="w-72 bg-zinc-800 h-screen fixed">
            <nav className="flex flex-col pt-10  h-screen justify-between">
                
                    <div>
                        <MenuItem icone={IconHome} url="/" texto="Início" />
                        <MenuItem
                            icone={IconUsers}
                            url="/clientes"
                            texto="Cadastro de Cliente"
                        />
                        <MenuItem
                            icone={IconWallet}
                            url="/entradas"
                            texto="Cadastro de Entradas"
                        />
                        <MenuItem
                            icone={IconShoppingCart}
                            url="/saidas"
                            texto="Cadastro de Saídas"
                        />
                    </div>
                    <div className="mb-6">
                        <MenuItem icone={IconLogout} url="/exit" texto="Sair" />
                    </div>

            </nav>
        </aside>
    );
}
