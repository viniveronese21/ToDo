import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export function Header () {
  return (
    <div  className="w-full h-[200px] bg-black flex items-center justify-center">
      <div className="flex items-center gap-3">
        <RocketLaunchIcon className="w-12 text-blue-700"/>
        <span className="text-3xl font-bold text-blue-600">To<span className="text-purple-700">Do</span></span>
      </div>
    </div>
  )
}
