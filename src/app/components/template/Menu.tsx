import {
    IconChartHistogram,
    IconLogout,
    IconShoppingCart,
    IconUsers,
    IconWallet,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <aside className="w-72 bg-zinc-800 h-screen fixed">
            <nav className="flex flex-col gap-1 pt-10 h-screen justify-between">
                
                    <div>
                        <MenuItem icone={IconChartHistogram} url="/" texto="Dashboard" />
                        <MenuItem
                            icone={IconUsers}
                            url="/clientes"
                            texto="Cadastro de Clientes"
                        />
                        <MenuItem
                            icone={IconShoppingCart}
                            url="/vendas"
                            texto="Cadastro de Vendas"
                        />
                        <MenuItem
                            icone={IconWallet}
                            url="/parcelas"
                            texto="Cadastro de Parcelas"
                        />
                    </div>
                    <div className="mb-6">
                        <MenuItem icone={IconLogout} url="/" texto="Sair" />
                    </div>

            </nav>
        </aside>
    );
}
