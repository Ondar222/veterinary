import { useEffect } from "react"
import { observer } from "mobx-react-lite"

const DarkMode = observer(() => {

  const handleClick = () => {
    theme.changeTheme()
    document.documentElement.setAttribute('font-size', 'A1')
  }

  const handleFontChangeA1 = () => {
    document.documentElement.setAttribute('font-size', 'A1')
  }

  const handleFontChangeA2 = () => {
    document.documentElement.setAttribute('font-size', 'A2')
  }

  const handleFontChangeA3 = () => {
    document.documentElement.setAttribute('font-size', 'A3')
  }

  return (
    <div className="container mx-auto flex justify-between py-5">
        <div className="flex gap-4">
          <button className="bg-gray-300 border border-black rounded-md py-3 px-4 cursor-pointer text-sm" onClick={handleFontChangeA1}>A</button>
          <button className="bg-gray-300 border border-black rounded-md py-3 px-4 cursor-pointer text-md" onClick={handleFontChangeA2}>A</button>
          <button className="bg-gray-300 border border-black rounded-md py-3 px-4 cursor-pointer text-xl" onClick={handleFontChangeA3}>A</button>
        </div>

        <button className="bg-gray-300 border-2 border-black rounded py-3 px-3" onClick={handleClick}>Обычная версия сайта</button>
    </div>
  )
})

export default DarkMode