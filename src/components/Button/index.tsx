import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  label: string,
  tipo?: boolean
}

export function Button({label, tipo, ...rest}: ButtonProps) {

  return(
    <button
      className={`${tipo ? 'bg-red-500' : 'bg-emerald-500' } ${tipo ? 'hover:bg-red-600' : 'hover:bg-emerald-600'}
      text-white px-3 py-1 rounded-md cursor-pointer transition-all`
      }
      {...rest}
    >
      {label}
    </button>
  )
}
