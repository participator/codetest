'use client'

import styles from "./page.module.css"
import Todo from "./components/Todo"
import TodoEdit from "./components/TodoEdit"
import MultiSelect from "./components/MultiSelect"
import Action from "./components/Action"
import { useState } from "react"
import Modal from "./components/Modal"
import Create from "./components/TodoCreate"

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
  main,
  main_heading,
  main_separator,
  main_modal,
  main_add
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
  const [displayMultiSelects, setDisplayMultiSelects] = useState(false)
  const [todoEditId, setTodoEditId] = useState<number | null>(null)
  const [displayCreateModal, setDisplayCreateModal] = useState(false)

  const handleMultiSelect = () => {
    displayMultiSelects ?
      setDisplayMultiSelects(false) :
      setDisplayMultiSelects(true)
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
    <main className={main}>
      <h1 className={main_heading}>Todos</h1>

      <MultiSelect handleOnClick={handleMultiSelect} display={displayMultiSelects} />
      <hr className={main_separator}></hr>
      {
        todos && todos.filter(todo => todo.deleted === false).map((todo) => {
          const {
            id,
            date,
            description,
            done,
            title
          } = todo

          return <Todo
            key={id}
            id={id}
            date={date}
            description={description}
            done={done}
            title={title}
            deleteTodo={() => {
              deleteTodo(id)
            }}
            displayMultiSelect={displayMultiSelects}
            displayEditForm={() => {
              setTodoEditId(id)
            }}
          />
        })
      }
      <Action
        name="add"
        styles={main_add}
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
    </main>
  )
}
