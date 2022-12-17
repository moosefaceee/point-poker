import { motion } from 'framer-motion'
import { Moon, Sun } from 'icons'
import { useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

type Themes = 'light' | 'dark'

export default function DarkModeSwitch() {
  const theme = localStorage.getItem('theme') as Themes

  const [isOn, setIsOn] = useState(() => {
    if (theme === 'light') {
      return true
    } else {
      return false
    }
  })

  const toggleSwitch = () => setIsOn(!isOn)

  console.log('isOn', isOn)

  if (isOn) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }

  if (
    theme === 'light' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: light)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div
      onClick={toggleSwitch}
      className={`flex-start flex h-[40px] w-[70px] rounded-[40px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
        isOn && 'place-content-end'
      }`}
    >
      <motion.div
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {isOn ? (
            <Sun className="h-6 w-6 text-yellow-300" />
          ) : (
            <Moon className="h-6 w-6 text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
