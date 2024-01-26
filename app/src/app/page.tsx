'use client'

import Image from "next/image"
import styles from "./page.module.css"
import Todo from "./components/Todo"
import TodoEdit from "./components/TodoEdit"
import MultiSelect from "./components/MultiSelect"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Todos</h1>

      <MultiSelect />
      <hr></hr>
      <Todo />
      <TodoEdit />
    </main>
  )
}
