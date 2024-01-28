'use client'

import Image from "next/image"
import styles from "./page.module.css"
import Todo from "./components/Todo"
import TodoEdit from "./components/TodoEdit"
import MultiSelect from "./components/MultiSelect"
import Action from "./components/Action"

const {
  main,
  main_heading,
  main_separator,
  main_modal,
  main_add
} = styles

export default function Home() {
  return (
    <main className={main}>
      <h1 className={main_heading}>Todos</h1>

      <MultiSelect />
      <hr className={main_separator}></hr>
      <Todo />
      <Action
        name="add"
        styles={main_add}
        handleAction={ () => console.log('create action')}
         />
         <div className={main_modal}>
           <TodoEdit />
         </div>
    </main>
  )
}
