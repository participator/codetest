import { useState } from "react"
import styles from "./todoedit.module.css"
import Status from "./Status"
import Action from "./Action"
import { setDefaultDate } from "../helpers/setDefaultDate"

const {
    todo_edit,
    todo_edit_form,
    todo_edit_form_heading,
    todo_edit_details,
    todo_edit_details_status,
    todo_edit_details_title,
    todo_edit_details_description,
    todo_edit_actions,
    todo_edit_actions_item
} = styles

export default function TodoEdit({ id, todos, editTodo, hideEditForm }) {
    const todo = todos.filter(todo => todo.id === id)[0]
    const [formData, setFormData] = useState({
        done: todo.done,
        dateModified: todo.dateModified,
        description: todo.description,
        title: todo.title,
    })

    const handleFormOnChange = ({ target }) => {
        let { name, value } = target

        if (name !== 'done') {
            setFormData(prevFormData => ({ ...prevFormData, [name]: value, dateModified: setDefaultDate() }))
        }
    }

    const handleStatusChange = ({ target }) => {
        let { name, checked } = target

        setFormData(prevFormData => ({ ...prevFormData, [name]: checked, dateModified: setDefaultDate() }))
    }

    const saveEdits = () => {
        const {
            done,
            dateModified,
            description,
            title,
        } = formData

        // save changes
        const todoEdited = {
            id,
            done,
            dateModified,
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
                <h2 className={todo_edit_form_heading}>Edit Todo</h2>
                <div className={todo_edit_details}>
                    <p>Done</p>
                    <Status 
                        state={formData.done}
                        styles={todo_edit_details_status}
                        handleStatusChange={handleStatusChange} 
                        />

                    <label htmlFor="title">Title</label>
                    <input className={todo_edit_details_title} name="title" maxLength={100} defaultValue={formData.title} />

                    <label htmlFor="description">Description</label>
                    <textarea className={todo_edit_details_description} name="description" maxLength={500} placeholder="" defaultValue={formData.description} />
                </div>
                <div className={todo_edit_actions}>
                    <Action
                        name="save"
                        styles={todo_edit_actions_item}
                        handleAction={saveEdits}
                        />
                    <Action
                        name="cancel"
                        styles={todo_edit_actions_item}
                        handleAction={cancelEdits}
                        />
                </div>
            </form>
        </div>
    )
}