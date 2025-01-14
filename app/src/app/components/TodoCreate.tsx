import { useState } from "react"
import styles from "./todocreate.module.css"
import { setDefaultDate } from "../helpers/setDefaultDate"
import Action from "./Action"

const {
    todo_create,
    todo_create_form,
    todo_create_form_title,
    todo_create_form_description,
    todo_create_actions,
    todo_create_actions_item
} = styles

export default function TodoCreate({createTodo, closeCreateTodoModal}) {
    const [todo, setTodo] = useState({
                                        title: '',
                                        description: ''                                
                                    })

    const handleOnChange = (event) => {
        const { name, value } = event.target
        setTodo({ ...todo, [name]: value })
    }

    const handleCreate = (event) => {
        event.preventDefault()
        const {
            description,
            title
        } = todo

        // send to api
        // when successful, update Todo
        createTodo({
            description: description,
            title: title,
        })

        // return to home page
        closeCreateTodoModal()
    }

    const handleCreateCancel = () => {
        closeCreateTodoModal()
    }
    
    return (
        <div className={todo_create}>
            <form className={todo_create_form} onChange={handleOnChange}>
                <h2>Create Todo</h2>
                <label htmlFor="title">Title</label>
                <input className={todo_create_form_title} name="title" maxLength={100} />
                <label htmlFor="description">Description</label>
                <textarea className={todo_create_form_description} name="description" maxLength={500} />
                <div className={todo_create_actions}>
                    <Action
                        name="add"
                        styles={todo_create_actions_item}
                        handleAction={handleCreate} 
                        />
                    
                    <Action
                        name="cancel"
                        styles={todo_create_actions_item}
                        handleAction={handleCreateCancel}
                        />
                </div>
            </form>
        </div>
    )
}