import { MouseEventHandler } from "react"
import styles from './action.module.css'

const {
    action
} = styles

type ActionParams = {
    name: string
    handleAction?: MouseEventHandler<HTMLSpanElement>
    styles?: string
}

export default function Action({ name, handleAction, styles }: ActionParams) {
    const element = handleAction ?
        <span
            className={`material-symbols-outlined ${action} ${styles}`}
            onClick={handleAction}>
            {name}
        </span> :
        <span
            className={`material-symbols-outlined ${action} ${styles}`}>
            {name}
        </ span>

    return element
}