import Image from "next/image"
import styles from "./page.module.css"
import Todo from "./Components/Todo"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Todos</h1>

      <div><span className="material-symbols-outlined">check_box_outline_blank</span></div>
      <hr></hr>
      <Todo />
    </main>
  )
}
