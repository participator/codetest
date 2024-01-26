import Image from "next/image"
import styles from "./page.module.css"
import Todo from "./Components/Todo"
import SelectAll from "./Components/SelectAll"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Todos</h1>

      <SelectAll />
      <hr></hr>
      <Todo />
    </main>
  )
}
