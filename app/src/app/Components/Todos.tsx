'use client'

import styles from "../page.module.css"
import Todo from "./Todo"
import TodoEdit from "./TodoEdit"
import MultiSelect from "./MultiSelect"
import Action from "./Action"
import { useState } from "react"
import Modal from "./Modal"
import Create from "./TodoCreate"

type Todo = {
  id: number
  dateCreated: string
  dateModified: string
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
  main_create
} = styles

export default function Todos({todos, handleHideTodos, setTodos}) {
  const [displayMultiSelects, setDisplayMultiSelects] = useState(false)
  const [todoEditId, setTodoEditId] = useState<number | null>(null)
  const [displayCreateModal, setDisplayCreateModal] = useState(false)
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
    const todosUpdated = todos.map(todo => {
      const {id} = todo
      
      if (todosToDelete.has(id)) {
        todosToDeleteUpdated.delete(id)
        
        return {
          ...todo,
          deleted: true
        }
      }
      
      return todo
    })
    
    setTodosToDelete(todosToDeleteUpdated)
    setTodos(todosUpdated)
  }

  const deleteTodo = (id: number) => {
    const todosUpdated = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          deleted: true
        }
      }

      return todo
    })

    setTodos(todosUpdated)
  }

  const editTodo = (todos: Todos, todoEdited: Todo) => {
    const { id } = todoEdited
    const todosUpdated = todos.map(todo => {
      return todo.id === id ?
        todoEdited :
        todo
    })

    setTodos(todosUpdated)
  }

  const createTodo = (todos: Todos, todo) => {
    const newTodos = [...todos, todo]

    setTodos(newTodos)
  }

  const hideEditForm = () => {
    setTodoEditId(null)
  }

  return (
    <>
      <h1 className={main_heading}>
        Todos
        <Action
          name="delete_forever"
          styles=""
          handleAction={handleHideTodos}
          />
      </h1>

      <div className={main_bulk_actions}>

        { 
          displayMultiSelects && 
          <Action
            name="delete"
            styles={main_todos_delete}
            handleAction={deleteMultiSelectTodos}
            />
        }
        <MultiSelect handleOnClick={handleDisplayMultiSelect} display={displayMultiSelects} />
      </div>
      <hr className={main_separator}></hr>
      {
        todos && todos.filter(todo => todo.deleted === false).map((todo) => {
          const {id} = todo

          return <Todo
            key={id}
            data={todo}
            deleteTodo={() => {
              deleteTodo(id)
            }}
            displayEditForm={() => {
              setTodoEditId(id)
            }}
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
      <Action
        name="add"
        styles={main_create}
        handleAction={() => {
          setDisplayCreateModal(true)
        }}
      />
      {
        typeof todoEditId === "number" &&
        <Modal>
          <TodoEdit
            id={todoEditId}
            todos={todos}
            editTodo={editTodo}
            hideEditForm={hideEditForm}
          />
        </Modal>
      }
      {
        displayCreateModal &&
        <Modal>
          <Create
            createTodo={(todo) => {
              createTodo(todos, todo)
            }}
            closeCreateTodoModal={() => setDisplayCreateModal(false)}
          />
        </Modal>
      }
    </>
  )
}
