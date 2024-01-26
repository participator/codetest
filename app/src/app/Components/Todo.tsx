'use client'
import styles from "./page.module.css"
import { useState } from "react"

export default function Todo(props) {
    const { todo } = props
    console.log(todo)

    const [dateValue, setDateValue] = useState(new Date())

    const createValidDate = (string) => {
        const date = new Date(string)
        const day = date.getDate() + 1
        const dayFormatted =  day < 10 ? `0${day}` : day
        const month = date.getMonth() + 1
        const monthFormatted =  month < 10 ? `0${month}` : month
        const year = date.getFullYear()

        return `${year}-${monthFormatted}-${dayFormatted}`
    }

    return (
        <div className="todo">
            <span className="todo_status material-symbols-outlined">check</span>
            <div className="todo_details">
                <p className="todo_details_title">Start Code Test</p>
                <input 
                    type="date"
                    className="todos_details_date"
                    value={createValidDate(dateValue)}
                    onChange={({target}) => {
                        setDateValue(new Date(target.value))
                    }} />
            </div>
            <div className="todo_actions">
                <div>
                    <span 
                        className="material-symbols-outlined"
                        onClick={() => console.log('edit')}>
                            edit
                    </span>
                    <span className="material-symbols-outlined">delete</span>
                    <span className="material-symbols-outlined">check_box_outline_blank</span>
                </div>
                <span className="todo_actions_more material-symbols-outlined">expand_more</span>
            </div>
        </div>
    )
}