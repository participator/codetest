'use client'

import Image from "next/image"
import styles from "./page.module.css"
import Todo from "./components/Todo"
import TodoEdit from "./components/TodoEdit"
import MultiSelect from "./components/MultiSelect"

const {
  main,
  main_heading
} = styles

export default function Home() {
  return (
    <main className={main}>
      <h1 className={main_heading}>Todos</h1>

      <MultiSelect />
      <hr></hr>
      <Todo />
      <TodoEdit />
    </main>
  )
}
