import { useState } from "react"
import Action from "./Action"
import styles from "./todo.module.css"

const {
    todo,
    todo__description,
    todo_status,
    todo_details,
    todo_details_title,
    todo_details_date,
    todo_actions,
    todo_description,
    todo_description__visible,
    todo_expand
} = styles

export default function Todo(props) {
    const [displayDescription, setDisplayDescription] = useState(false)
    const { displayMultiSelect } = props

    return (
        <div className={`${todo} ${displayDescription && todo__description}`}>
            <span className={`material-symbols-outlined ${todo_status}`}>{ true ? 'check' : 'close' }</span>
            <div className={todo_details}>
                <p className={todo_details_title}>Start Code Test</p>
                <p className={todo_details_date}>Jan 24, 2024</p>
            </div>
            <div className={todo_actions}>
                <div>
                    <Action 
                            name="edit"
                            handleAction={() => console.log('displayEditForm')}
                            />
                    <Action 
                            name="delete"
                            handleAction={() => console.log('send delete to api')}
                            />
                    {
                        displayMultiSelect &&
                        <Action 
                            name="check_box_outline_blank"
                            handleAction={() => console.log('display when multiselect is checked')}
                            />
                    }
                </div>
            </div>
            <p className={`${todo_description} ${displayDescription && todo_description__visible}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Action
                styles={todo_expand}
                name={`${ displayDescription ? 'expand_less' : 'expand_more' }`}
                handleAction={() => {
                    displayDescription ? setDisplayDescription(false) : setDisplayDescription(true)
                }}
                />
        </div>
    )
}