import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode,
  tipo?: 'primary' | 'secondary' | 'default'
}

export function Button({children, tipo, ...rest}: ButtonProps) {

  return(
    <button
      className={`
        ${tipo === 'secondary' ? 'bg-red-500' :
          tipo === 'primary' ? 'bg-emerald-500' :
          tipo === 'default'?  "bg-blue-500" : ''
        }
        ${tipo === 'secondary'  ? 'hover:bg-red-600' :
          tipo === 'primary' ? 'hover:bg-emerald-600' :
          tipo === 'default'?  "hover:bg-blue-600" : ''
        }
      text-white p-4 rounded-md cursor-pointer transition-all flex gap-2`
      }
      {...rest}
    >
      {children}
    </button>
  )
}
