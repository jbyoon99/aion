import Dongryo from '@static/dongryo.png'
import { cva } from 'class-variance-authority'

export const Pending = () => {
  console.log(window.api)

  return (
    <div className="size-full flex items-center justify-between flex-col py-5 select-none">
      <img className="h-[90%] pointer-events-none " src={Dongryo} />
      <div className="flex justify-between w-full px-4 ">
        <span className={MenuStyle()}>Settings</span>
        <span className={MenuStyle()} onClick={() => window.api.quitApp()}>
          Quit
        </span>
      </div>
    </div>
  )
}

const MenuStyle = cva('text-sm p-1 hover:bg-mystic-500 cursor-pointer', { variants: {} })
