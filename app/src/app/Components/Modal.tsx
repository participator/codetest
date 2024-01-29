import styles from "./modal.module.css"

const {
    modal
} = styles

export default function Modal({children}) {
    return (
        <div className={modal}>
            {children}
        </div>
    )
}