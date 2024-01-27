import { MouseEventHandler } from "react"

type ActionParams = {
    name: string
    handleAction?: MouseEventHandler<HTMLSpanElement>
    styles?: string
}

export default function Action({ name, handleAction, styles }: ActionParams) {
    const element = handleAction ?
        <span
            className={`material-symbols-outlined ${styles}`}
            onClick={handleAction}>
            {name}
        </span> :
        <span
            className={`material-symbols-outlined ${styles}`}>
            {name}
        </ span>

    return element
}