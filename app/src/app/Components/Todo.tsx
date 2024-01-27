import styles from "./todo.module.css"

const {
    todo,
    todo_status,
    todo_details,
    todo_details_title,
    todo_details_date,
    todo_actions
} = styles

export default function Todo(props) {
    const { displayMultiSelect } = props


    const disableInputs = () => {
        return false
    }

    return (
        <div className={todo}>
            <span className={`material-symbols-outlined ${todo_status}`}>{ true ? 'check' : 'close' }</span>
            <div className={todo_details}>
                <p className={todo_details_title}>Start Code Test</p>
                <p className={todo_details_date}>Jan 24, 2024</p>
            </div>
            <div className={todo_actions}>
                <div>
                    <span 
                        className="material-symbols-outlined"
                        onClick={() => console.log('displayEditForm')}>
                            edit
                    </span>
                    <span 
                        className="material-symbols-outlined"
                        onClick={() => console.log('send delete to api')}>
                            delete
                    </span>
                    {
                        displayMultiSelect &&
                        <span
                            className="material-symbols-outlined"
                            onClick={() => console.log('display when multiselect is checked')}>
                                check_box_outline_blank
                        </span>
                    }
                </div>
                <span 
                    className="todo_actions_more material-symbols-outlined">
                        expand_more
                </span>
            </div>
        </div>
    )
}