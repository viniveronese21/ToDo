/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { Todo } from "./components/Todo"
import { ToDoForm } from "./components/TodoForm"
import { BadgeAlert } from "./components/BadgeAlert"
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline"
import { Header } from "./components/Header"

interface NewItemProps {
  id: number
  text: string
  category: string
  isComplete: boolean
}

export default function App() {
  const [todo, setTodo] = useState<NewItemProps[]>([])

  const completedTodos = todo.filter(item => item.isComplete).length

  function addToDo(text: string, category: string) {
    const newToDo = [...todo, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isComplete: false
    }]

    setTodo(newToDo)
  }

  function removeTodo(id: number) {
    const newTodos = [...todo]
    const filtered = newTodos.filter(todo => todo.id !== id ? todo : null)
    localStorage.removeItem('todo')

    setTodo(filtered)
  }

  function completeTodo(id: number) {
    const newTodos = [...todo]
    newTodos.map(todo => todo.id === id ? todo.isComplete = !todo.isComplete : todo)

    setTodo(newTodos)
  }

  useEffect(() => {
   const setStored = localStorage.getItem('todo')

   if(setStored !== null) {
    setTodo(JSON.parse(setStored))
   }
  }, [])

  useEffect(() => {
   if(todo.length) {
    localStorage.setItem('todo', JSON.stringify(todo))
   }
  }, [todo])

  return (
    <div>
     <Header/>
     <div className="bg-white py-5 px-8 max-w-[736px] rounded-xl -mt-8 mb-12 mx-auto">

      <ToDoForm addTodo={addToDo}/>

      <div className="flex justify-between mb-2">
        <span>Tarefas criadas: {todo.length}</span>
        <span>Concluidas: {todo.length ? <span>{completedTodos} de {todo.length}</span> : todo.length}</span>
      </div>

      <div className="border-t-2 border-gray-500">
      {todo.length ? todo.map(item => {
        return (
            <div key={item.id} className="mt-4">
              <Todo item={item} remove={removeTodo} complete={completeTodo}/>
            </div>
          )
        }) :
        <BadgeAlert text="Você ainda não tem tarefas cadastradas!">
          <ClipboardDocumentListIcon className="w-12 text-gray-500" />
        </BadgeAlert>
      }
      </div>
     </div>
    </div>
  )
}
