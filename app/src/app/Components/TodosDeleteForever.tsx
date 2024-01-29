'use client'

import styles from "../page.module.css"
import Todo from "./Todo"
import MultiSelect from "./MultiSelect"
import Action from "./Action"
import { useState } from "react"
import TodoDeleteForever from "./TodoDeleteForever"

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
  main_heading,
  main_bulk_actions,
  main_todos_delete,
  main_separator,
} = styles

export default function TodosDeleteForever({todos, handleDisplayTodos, setTodos}) {
  const [displayMultiSelects, setDisplayMultiSelects] = useState(false)
  const [todosToDelete, setTodosToDelete] = useState<Set<number>>(new Set())

  const handleDisplayMultiSelect = () => {
    const toggleDisplay = !displayMultiSelects
    setDisplayMultiSelects(toggleDisplay)

    toggleDisplay && todosToDelete.clear()
  }

  const selectTodo = (id: number) => {
    const updated = new Set(todosToDelete)
    updated.add(id)
    setTodosToDelete(updated)
  }
  
  const deselectTodo = (id: number) => {
    const updated = new Set(todosToDelete)
    updated.delete(id)
    setTodosToDelete(updated)
  }

  const deleteMultiSelectTodos = () => {
    const todosToDeleteUpdated = new Set(todosToDelete)
    const todosUpdated = todos.filter(todo => {
      const {id} = todo
      let keep = true
      
      if (todosToDelete.has(id)) {
        todosToDeleteUpdated.delete(id)
        keep = false 
      }
      
      return keep
    })
    
    setTodosToDelete(todosToDeleteUpdated)
    setTodos(todosUpdated)
  }

  const deleteTodo = (id: number) => {
    const todosUpdated = todos.filter(todo => {
        return todo.id !== id
    })

    setTodos(todosUpdated)
  }

  const restoreTodo = (id: number) => {
    const todosUpdated = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                deleted: false
            }
        }

        return todo
    })
    
    setTodos(todosUpdated)
  }

  return (
    <>
      <h1 className={main_heading}>
        Todos Trash
        <Action
          name="arrow_back"
          styles=""
          handleAction={handleDisplayTodos}
          />
      </h1>

      <div className={main_bulk_actions}>

        { 
          displayMultiSelects && 
          <Action
            name="delete_forever"
            styles={main_todos_delete}
            handleAction={deleteMultiSelectTodos}
            />
        }
        <MultiSelect handleOnClick={handleDisplayMultiSelect} display={displayMultiSelects} />
      </div>
      <hr className={main_separator}></hr>
      {
        todos && todos.filter(todo => todo.deleted === true).map((todo) => {
          const {id} = todo

          return <TodoDeleteForever
            key={id}
            data={todo}
            deleteTodo={() => {
              deleteTodo(id)
            }}
            restoreTodo={() => restoreTodo(id)}
            displayMultiSelect={displayMultiSelects}
            displayMultiSelectChecked={() => {
              return todosToDelete.has(id)
            }}
            setDisplayMultiSelectChecked={(state) => {
              state ?
                deselectTodo(id) :
                selectTodo(id)
            }} 
            handleMultiSelect={(checked) => {
              checked ?
                selectTodo(id) :
                deselectTodo(id)
            }}
          />
        })
      }
    </>
  )
}
