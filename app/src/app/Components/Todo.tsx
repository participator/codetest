import { useState } from "react"
import Action from "./Action"
import styles from "./todo.module.css"

const {
    todo,
    todo__description,
    todo_done,
    todo_details,
    todo_details_title,
    todo_details_date,
    todo_actions,
    todo_description,
    todo_description__visible,
    todo_expand
} = styles

export default function Todo({id, description, date, done, title, displayMultiSelect }) {
    const [displayDescription, setDisplayDescription] = useState(false)

    return (
        <div className={`${todo} ${displayDescription && todo__description}`}>
            <span className={`material-symbols-outlined ${todo_done}`}>{ done ? 'check' : 'close' }</span>
            <div className={todo_details}>
                <p className={todo_details_title}>{title}</p>
                <p className={todo_details_date}>{date}</p>
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
                {description}
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