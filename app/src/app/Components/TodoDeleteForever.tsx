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

export default function TodosDeleteForever({
    data,
    deleteTodo,
    restoreTodo,
    displayMultiSelect,
    displayMultiSelectChecked,
    setDisplayMultiSelectChecked,
    handleMultiSelect
}) {
    const [displayDescription, setDisplayDescription] = useState(false)
    const {
        date,
        description,
        done,
        title
    } = data

    const formatDate = (date) => {
        const dateObject = new Date(date)
        const dateFormatted = dateObject.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit"
        })

        return dateFormatted
    }

    return (
        <div className={`${todo} ${displayDescription && todo__description}`}>
            <span className={`material-symbols-outlined ${todo_done}`}>{done ? "check" : "close"}</span>
            <div className={todo_details}>
                <p className={todo_details_title}>{title}</p>
                <p className={todo_details_date}>{formatDate(date)}</p>
            </div>
            <div className={todo_actions}>
                <div>
                    <Action
                        name="undo"
                        handleAction={restoreTodo}
                    />
                    <Action
                        name="delete_forever"
                        handleAction={deleteTodo}
                    />
                    {
                        displayMultiSelect &&
                        displayMultiSelectChecked() &&
                        <Action
                            name="check_box"
                            handleAction={() => {
                                const nextState = false
                                setDisplayMultiSelectChecked(nextState)
                                handleMultiSelect(false)
                            }}
                        />
                    }
                    {
                        displayMultiSelect &&
                        !displayMultiSelectChecked() &&
                        <Action
                            name="check_box_outline_blank"
                            handleAction={() => {
                                const nextState = true
                                setDisplayMultiSelectChecked(nextState)
                                handleMultiSelect(true)
                            }}
                        />
                    }
                </div>
            </div>
            <p className={`${todo_description} ${displayDescription && todo_description__visible}`}>
                {description}
            </p>
            <Action
                styles={todo_expand}
                name={`${displayDescription ? "expand_less" : "expand_more"}`}
                handleAction={() => {
                    displayDescription ? setDisplayDescription(false) : setDisplayDescription(true)
                }}
            />
        </div>
    )
}