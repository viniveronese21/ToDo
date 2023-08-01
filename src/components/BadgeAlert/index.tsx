interface BadgeAlertProps{
  text: string
}

export function BadgeAlert({text}: BadgeAlertProps) {
  return (
    <div className="text-center my-8">
      <span className="text-red-600 font-bold text-xl underline">{text}</span>
    </div>
  )
}
