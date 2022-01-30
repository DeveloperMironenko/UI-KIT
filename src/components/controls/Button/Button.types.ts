import {MouseEventHandler, ReactNode} from "react"

export type ButtonProps = {
    children: ReactNode,
    size?: "s" | "m" | "l",
    onClick?: MouseEventHandler<HTMLButtonElement>
}
