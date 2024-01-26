import { useState } from "react"
// import styles from "./page.module.css"
import Status from "./Status"

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

    const saveTodoEdits = () => {
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

    return (
        <form className="todo_edit" onChange={handleFormOnChange}>
            <Status state={formData.status} handleStatusChange={handleStatusChange}/>
            <div className="todo_edit_details">
                <input className="todo_edit_details_title" name="name" maxLength={100} defaultValue='Start Code Test' />
                <textarea className="todo_edit_details_description" name="description" maxLength={500} placeholder=""></textarea>
            </div>
            <div className="todo_edit_actions">
                <span
                    className="material-symbols-outlined"
                    onClick={saveTodoEdits}>
                    save
                </span>
            </div>
        </form>
    )
}