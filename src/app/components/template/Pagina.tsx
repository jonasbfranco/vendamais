import { ReactNode } from "react";

export interface PaginaProps {
    children: ReactNode;
    className?: string;
}

export default function Pagina(props: PaginaProps) {
    return (
        <div>
            <main className={`flex-1 p-7 ml-72 ${props.className ?? ''}`}>{props.children}</main>
        </div>
    )  
}