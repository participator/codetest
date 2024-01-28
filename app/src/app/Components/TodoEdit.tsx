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

export default function TodoEdit(props) {
    const [formData, setFormData] = useState({
        status: false,
        name: '',
        date: '',
        description: '',
    })
    const { todo } = props

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

        if (name !== 'status') {
            setFormData(prevFormData => ({ ...prevFormData, [name]: value, date: setDefaultDate() }))
        }
    }

    const handleStatusChange = ({ target }) => {
        let { name, checked } = target

        setFormData(prevFormData => ({ ...prevFormData, [name]: checked, date: setDefaultDate() }))
    }

    const saveEdits = () => {
        const {
            status,
            name,
            date,
            description
        } = formData
        // send to api
        console.log('send to api', status, name, date, description)
        // return to todos
        console.log('return to todos')
    }

    const cancelEdits = () => {
        // return to todos
        console.log('return to todos')
    }

    return (
        <div className={todo_edit}>
            <form className={todo_edit_form} onChange={handleFormOnChange}>
                <Status state={formData.status} handleStatusChange={handleStatusChange} />
                <div className={todo_edit_details}>
                    <label htmlFor="name">Name</label>
                    <input className={todo_edit_details_title} name="name" maxLength={100} defaultValue='Start Code Test' />
                    <label htmlFor="description">Description</label>
                    <textarea className={todo_edit_details_description} name="description" maxLength={500} placeholder=""></textarea>
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