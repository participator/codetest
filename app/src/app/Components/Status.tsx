import { useState } from "react"
import styles from './status.module.css'

const {
    status
} = styles

export default function Status({ state }) {
    const icon = state ? 'check' : 'close'

    return <label className="material-symbols-outlined">
                <input
                    className={`${status} ${state ? 'status__done' : 'status__undone'}`}
                    name="status"
                    type="checkbox"
                    checked={state}
                />
                {icon}
            </label>

}