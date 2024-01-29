import { useState } from "react"
import styles from './status.module.css'

const {
    status
} = styles

export default function Status({ state, handleStatusChange }) {
    const icon = state ? 'check' : 'close'

    return <label className="material-symbols-outlined">
                <input
                    className={`${status} ${state ? 'status__done' : 'status__undone'}`}
                    name="done"
                    type="checkbox"
                    checked={state}
                    onChange={handleStatusChange}
                />
                {icon}
            </label>

}