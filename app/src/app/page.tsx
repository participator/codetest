'use client'

import Image from "next/image"
import styles from "./page.module.css"
import Todo from "./components/Todo"
import TodoEdit from "./components/TodoEdit"
import MultiSelect from "./components/MultiSelect"
import Action from "./components/Action"
import { useState } from "react"

const {
  main,
  main_heading,
  main_separator,
  main_modal,
  main_add
} = styles

const todos = [
  {
    id: 0,
    date: 'Jan 24, 2024',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    done: true,
    title: "Start Code Test",
  }
]

export default function Home() {
  const [displayMultiSelects, setDisplayMultiSelects] = useState(false)

  const handleMultiSelect = () => {
    console.log('display multiselect')
    displayMultiSelects ?
      setDisplayMultiSelects(false) :
      setDisplayMultiSelects(true)
  }

  return (
    <main className={main}>
      <h1 className={main_heading}>Todos</h1>
      
      <MultiSelect handleOnClick={handleMultiSelect} display={displayMultiSelects} />
      <hr className={main_separator}></hr>
      {
        todos.map((todo) => {
          const {
            id,
            date,
            description,
            done,
            title
          } = todo

          return  <Todo 
                    key={id}
                    id={id}
                    date={date}
                    description={description}
                    done={done}
                    title={title}
                    displayMultiSelect={displayMultiSelects}
                    />
        })
      }
      <Action
        name="add"
        styles={main_add}
        handleAction={ () => console.log('create action')}
         />
         {
         false && <div className={main_modal}>
           <TodoEdit />
         </div>
          }
    </main>
  )
}
