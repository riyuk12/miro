import { NewButton } from "./new-button"
import {List} from "./list"

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex flex-col p-3 text-white gap-y-4">
      <List />
      <NewButton />
    </aside>
  )
}

