import { useState } from "react"
import styles from "./todoedit.module.css"
import Status from "./Status"
import Action from "./Action"

const {
    todo_edit,
    todo_edit_form,
    todo_edit_details,
    todo_edit_details_title,
    todo_edit_details_description,
    todo_edit_actions
} = styles

export default function TodoEdit({ id, todos, editTodo, hideEditForm }) {
    const todo = todos.filter(todo => todo.id === id)[0]
    const [formData, setFormData] = useState({
        done: todo.done,
        date: todo.date,
        description: todo.description,
        title: todo.title,
    })

    const setDefaultDate = () => {
        const date = new Date()
        const day = date.getDate() + 1
        const dayFormatted = day < 10 ? `0${day}` : day
        const month = date.getMonth() + 1
        const monthFormatted = month < 10 ? `0${month}` : month
        const year = date.getFullYear()

        return `${year}-${monthFormatted}-${dayFormatted}`
    }

    const handleFormOnChange = ({ target }) => {
        let { name, value } = target

        if (name !== 'done') {
            setFormData(prevFormData => ({ ...prevFormData, [name]: value, date: setDefaultDate() }))
        }
    }

    const handleStatusChange = ({ target }) => {
        let { name, checked } = target

        setFormData(prevFormData => ({ ...prevFormData, [name]: checked, date: setDefaultDate() }))
    }

    const saveEdits = () => {
        const {
            done,
            date,
            description,
            title,
        } = formData

        // save changes
        const todoEdited = {
            id,
            done,
            date,
            description,
            title
        }

        editTodo(todos, todoEdited)
        
        // return to todos
        hideEditForm()
    }

    const cancelEdits = () => {
        // return to todos
        hideEditForm()
    }

    return (
        <div className={todo_edit}>
            <form className={todo_edit_form} onChange={handleFormOnChange}>
                <Status state={formData.done} handleStatusChange={handleStatusChange} />
                <div className={todo_edit_details}>
                    <label htmlFor="title">Title</label>
                    <input className={todo_edit_details_title} name="title" maxLength={100} defaultValue={formData.title} />

                    <label htmlFor="description">Description</label>
                    <textarea className={todo_edit_details_description} name="description" maxLength={500} placeholder="" defaultValue={formData.description} />
                </div>
                <div className={todo_edit_actions}>
                    <Action
                        name="save"
                        handleAction={saveEdits}
                        />
                    <Action
                        name="cancel"
                        handleAction={cancelEdits}
                        />
                </div>
            </form>
        </div>
    )
}