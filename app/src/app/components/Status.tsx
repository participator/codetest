import styles from './status.module.css'

const {
    status,
    status_checkbox,
    status_icon
} = styles

export default function Status({ state, styles, handleStatusChange }) {
    const icon = state ? 'check' : 'close'

    return <label className={`material-symbols-outlined ${status} ${styles}`}>
                <input
                    className={`${status_checkbox} ${state ? 'status__done' : 'status__undone'}`}
                    name="done"
                    type="checkbox"
                    checked={state}
                    onChange={handleStatusChange}
                />
                <span className={status_icon}>{icon}</span>
            </label>

}