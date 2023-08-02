/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Modal } from "../Modal";

interface ToDoFormProps {
  addTodo: (text: string, category: string) => void;
}

interface NewCategoryProps {
  id: number
  category: string
}

export function ToDoForm({ addTodo }: ToDoFormProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState<NewCategoryProps[]>([]);


  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  function addCategory(category: string) {
    if(!category) return

    const addNewCategory = [...newCategory, {
      id: Math.floor(Math.random() * 1000),
      category,
    }]

    setNewCategory(addNewCategory)
    setCategory("")
  }

  function removeCategory(id: number) {
    const revmovedCategory = [...newCategory]
    const filtered = revmovedCategory.filter(category => category.id !== id ? category : null)
    localStorage.removeItem('category')

    setNewCategory(filtered)
  }

  function handleSubmit (e: { preventDefault: () => void }) {
    e.preventDefault();

    if(!value || !category) return

    addTodo(value, category)

    setValue("")
    setCategory("")
  }

  //Local Storage
  useEffect(() => {
    const setStored = localStorage.getItem('category')

    if(setStored !== null) {
     setNewCategory(JSON.parse(setStored))
    }
   }, [])

   useEffect(() => {
    if(newCategory.length) {
     localStorage.setItem('category', JSON.stringify(newCategory))
    }
   }, [newCategory])

  return(
    <>
      <form className="mt-8 mb-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite um titulo"
          className="border border-gray-600 rounded-md px-3 py-1"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <div className="flex items-center gap-3">
          <select className="border border-gray-600 rounded-md px-3 py-1 w-full"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>

            {newCategory &&
              newCategory.map(({id, category }) =>
                <option key={id} value={category}>
                  {category}
                </option>
              )
            }
          </select>

          <button onClick={handleOpenModal}>
            <PlusCircleIcon className="w-8 text-blue-500 hover:text-blue-600 transition-colors"/>
          </button>
        </div>

        <div className="flex gap-3">
          <Button tipo="default">
            Criar
            <PlusCircleIcon className="w-6"/>
          </Button>

          {/* <Button tipo="primary" onClick={handleOpenModal}>
            Adicionar categoria
            <PlusCircleIcon className="w-6"/>
          </Button> */}
        </div>

        <Modal isOpen={modalOpen} onClose={handleCloseModal} label="Adicionar Categoria">
          <div className="flex items-center my-4 gap-3">
            <input
              type="text"
              placeholder="Digite a categoria"
              className="border border-gray-600 rounded-md px-3 py-1 w-full"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <button
              className="flex items-center gap-4"
              onClick={() => addCategory(category)}
            >
              <PlusCircleIcon className="w-8 text-blue-500 hover:text-blue-600 transition-colors"/>
            </button>
          </div>

          {newCategory && newCategory.map(({id, category}) => {
            return (
              <div className="flex items-center justify-between mx-1 border-t-2 py-2">
                <span key={id}>{category}</span>
                <button
                  onClick={() => removeCategory(id)}
                  className="flex items-center gap-2 text-sm text-red-500 hover:bg-red-100 rounded-md p-2 transition-colors"
                >
                  Remover
                </button>
              </div>
            )
          })}
        </Modal>

      </form>
    </>
  )
}
