import { useState } from "react"
import styles from "./todocreate.module.css"
import { setDefaultDate } from "../helpers/setDefaultDate"
import Action from "./Action"

const {
    todo_create,
    todo_create_form,
    todo_create_submit
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

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const {
            description,
            title
        } = todo

        // send to api
        // when successful, update Todo
        createTodo({
            id: Math.ceil(Math.random() * 100),
            date: setDefaultDate(),
            deleted: false,
            description: description,
            title: title,
        })

        // return to home page
        closeCreateTodoModal()
    }
    
    return (
        <div className={todo_create}>
            <form className={todo_create_form} onChange={handleOnChange} onSubmit={handleOnSubmit}>
                <label htmlFor="title">Title</label>
                <input name="title" />
                <label htmlFor="description">Description</label>
                <textarea name="description" />
                <Action
                    name="add"
                    styles={todo_create_submit}
                    handleAction={handleOnSubmit} 
                    />
            </form>
        </div>
    )
}