import { Moon, Sun } from 'icons'
import { useState } from 'react'

type Themes = 'light' | 'dark'

export default function DarkModeSwitch() {
  const theme = localStorage.getItem('theme') as Themes

  const [isOn, setIsOn] = useState(() => {
    if (theme === 'light') {
      return false
    } else {
      return true
    }
  })

  const toggleSwitch = () => {
    return setIsOn(!isOn)
  }

  const addClass = (key: string) => {
    return document.documentElement.classList.add(key)
  }

  const removeClass = (key: string) => {
    return document.documentElement.classList.remove(key)
  }

  if (isOn) {
    addClass('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
    removeClass('dark')
  }

  if (
    theme === 'light' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: light)').matches)
  ) {
    addClass('dark')
  } else {
    removeClass('dark')
  }

  return (
    <div
      onClick={toggleSwitch}
      className={`flex-start flex h-[40px] w-[70px] rounded-[40px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
        isOn && 'place-content-end'
      }`}
    >
      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black/90">
        <div>
          {isOn ? (
            <Sun className="h-6 w-6 text-yellow-300" />
          ) : (
            <Moon className="h-6 w-6 text-slate-200" />
          )}
        </div>
      </div>
    </div>
  )
}
