import { ElementType } from "react"

export interface TituloProps {
    principal: string
    secundario: string
    icone: ElementType
}
export default function Titulo(props: TituloProps) {
    return (
        <div>
            <div>
                <h1>...</h1>
                <h2>...</h2>
            </div>
        </div>
    )
}