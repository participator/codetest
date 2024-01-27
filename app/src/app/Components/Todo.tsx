import Action from "./Action"
import styles from "./todo.module.css"

const {
    todo,
    todo_status,
    todo_details,
    todo_details_title,
    todo_details_date,
    todo_actions,
    todo_expand
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
                <Action
                    styles={todo_expand}
                    name="expand_more" 
                    handleAction={() => console.log('display details')}
                    />
        </div>
    )
}