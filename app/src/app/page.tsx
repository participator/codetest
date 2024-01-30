'use client'

import { useEffect, useState } from "react"
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

export default function Home() {
  const [todos, setTodos] = useState<Todos>([])
  const [displayTodos, setDisplayTodos] = useState(true)

  useEffect(() => {
    fetch('/api/todo')
      .then(async (response) => {
        const data = await response.json()
        
        setTodos(data)
      })
  }, [todos.length])

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
