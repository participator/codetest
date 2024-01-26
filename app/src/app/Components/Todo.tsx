import styles from "./page.module.css"

export default function Todo(props) {
    const { todo } = props
    console.log(todo)

    return (
        <div>
            <span className="material-symbols-outlined">check</span>
            <div className="item">
                Start Code Test
                <p>Jan 24, 2024</p>
            </div>
            <div>
                <div>
                    <span className="material-symbols-outlined">edit</span>
                    <span className="material-symbols-outlined">delete</span>
                    <span className="material-symbols-outlined">check_box_outline_blank</span>
                </div>
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    )
}