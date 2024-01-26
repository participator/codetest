import { useState } from "react"
import styles from "./page.module.css"

export default function TodoEdit(props) {
    const [isDone, setIsDone] = useState(false)
    const { todo } = props
    console.log(todo)

    const setDefaultDate = () => {
        const date = new Date()
        const day = date.getDate() + 1
        const dayFormatted = day < 10 ? `0${day}` : day
        const month = date.getMonth() + 1
        const monthFormatted = month < 10 ? `0${month}` : month
        const year = date.getFullYear()

        return `${year}-${monthFormatted}-${dayFormatted}`
    }

    const displayIsDoneState = () => {
        const state = isDone ?
                        <span className="todo_edit_status todo_edit_status__done material-symbols-outlined">check</span> :
                        <span className="todo_edit_status todo_edit_status__undone material-symbols-outlined">close</span>

        return state
    }

    const saveTodoEdits = () => {
        // get data from form
        // send to api
        // return to todos
    }

    return (
        <form className="todo_edit">
            { displayIsDoneState() }
            <div className="todo_edit_details">
                <input className="todo_edit_details_title" maxLength={100} value='Start Code Test' />
                <input className="todo_edit_details_modified_date" type="date" defaultValue={setDefaultDate()} min={setDefaultDate()} hidden />
                <textarea className="todo_edit_details_description" maxLength={500} placeholder=""></textarea>
            </div>
            <div className="todo_edit_actions">
                <span
                    className="material-symbols-outlined"
                    onClick={() => console.log('edit')}>
                    save
                </span>
            </div>
        </form>
    )
}