'use client'

import { useState } from "react"
import Todos from "./components/Todos"
import TodosDeleteForever from "./components/TodosDeleteForever"
import styles from "./page.module.css"

type Todo = {
  id: number
  date: string
  description: string
  deleted: boolean
  done: boolean
  title: string
}

type Todos = Todo[]

const {
  main
} = styles

const mockTodos = [
  {
    id: 0,
    date: 'Jan 24, 2024',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    deleted: false,
    done: true,
    title: "Start Code Test",
  },
  {
    id: 1,
    date: 'Jan 28, 2024',
    description: "Some more Ipsum",
    deleted: false,
    done: false,
    title: "Complete Code Test",
  },
  {
    id: 2,
    date: 'Jan 28, 2024',
    description: "Some mmore more Ipsum",
    deleted: false,
    done: false,
    title: "Complete Code Test Again",
  }
]

export default function Home() {
  const [todos, setTodos] = useState<Todos>(mockTodos)
  const [displayTodos, setDisplayTodos] = useState(true)

  return (
    <main className={main}>
      {
        displayTodos ? 
          <Todos
            todos={todos}
            handleHideTodos={() => setDisplayTodos(false)}
            setTodos={setTodos}
            /> :
          <TodosDeleteForever
            todos={todos}
            handleDisplayTodos={() => setDisplayTodos(true)}
            setTodos={setTodos}
            /> 
      }
    </main>
  )
}
