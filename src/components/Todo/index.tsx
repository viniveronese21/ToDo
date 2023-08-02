import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/outline"
import { Button } from "../Button"
import { CheckCircleIcon as CheckedIcon } from "@heroicons/react/24/solid"

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
    <div className="bg-gray-500 flex items-center  justify-between px-3 py-6 rounded-xl mb-3 flex-nowrap">
          <Button onClick={()=> complete(item.id)}>
            {
              item.isComplete? <CheckedIcon className='h-6 text-emerald-500'/>
              :  <CheckCircleIcon className="h-6 text-emerald-500" />
            }
          </Button>

          <div className={`${item.isComplete? 'line-through': ''} text-white ml-2 w-full`}>
            <p>{item.text}</p>
            <p>({item.category})</p>
          </div>

          <Button onClick={() => remove(item.id)}>
            <TrashIcon className="w-6 text-white hover:text-red-300 transition-colors"/>
          </Button>

    </div>
  )
}
