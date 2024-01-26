'use client'

import Image from "next/image"
import styles from "./page.module.css"
import Todo from "./components/Todo"
import TodoEdit from "./components/TodoEdit"
import SelectAll from "./components/SelectAll"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Todos</h1>

      <SelectAll />
      <hr></hr>
      <Todo />
      <TodoEdit />
    </main>
  )
}
