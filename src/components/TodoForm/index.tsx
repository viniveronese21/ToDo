import { useState } from "react";
import { Button } from "../Button";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

interface ToDoFormProps {
  addTodo: (text: string, category: string) => void;
}

export function ToDoForm({ addTodo }: ToDoFormProps) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit (e: { preventDefault: () => void }) {
    e.preventDefault();

    if(!value || !category) return

    addTodo(value, category)

    setValue("")
    setCategory("")
  }

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


        <select className="border border-gray-600 rounded-md px-3 py-1"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>

        <div>
          <Button tipo="default">
            Criar
            <PlusCircleIcon className="w-6"/>
          </Button>
        </div>

      </form>
    </>
  )
}
