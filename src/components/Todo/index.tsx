import { Button } from "../Button"

interface ToDoProps{
  item: {
    id: number
    text: string
    category: string
    isComplete?: boolean
  }
  remove: (id: number) => void
  complete: (id: number) => void
}

export function Todo({item, remove, complete}: ToDoProps) {
  return (
    <div className="bg-gray-100 flex justify-between items-center px-3 py-6 rounded-xl mb-3">
      <div className={`${item.isComplete? 'line-through': ''}`}>
        <p className="text-gray-600 mb-2">{item.text}</p>
        <p className="text-gray-500">({item.category})</p>
      </div>
      <div className="flex gap-1">
        <Button label="Completar" onClick={()=> complete(item.id)}/>
        <Button label="x" tipo onClick={() => remove(item.id)}/>
      </div>
    </div>
  )
}
