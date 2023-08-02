import { ReactNode } from "react"

interface BadgeAlertProps{
  text: string
  children?: ReactNode
}

export function BadgeAlert({text, children}: BadgeAlertProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 gap-4">
      {children}
      <span className="text-gray-600 font-semibold text-base">{text}</span>
    </div>
  )
}
