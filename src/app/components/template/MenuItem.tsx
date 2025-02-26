import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemProps{
    icone: ElementType
    texto: string
    url: string
}
export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className="flex gap-2 px-4 py-4 hover:bg-black">
            <props.icone className="text-zinc-200 font-bold" size={24} stroke={2} />
            <span className="text-zinc-200">{props.texto}</span>
        </Link>
    )
}