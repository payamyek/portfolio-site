import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const MobileNavBar = (props) => {
  return (
    <div className="lg:hidden flex space-between md:mt-3 mt-1">
      <a
        href="/"
        className="text-center flex-1 font-bold cursor-pointer hover:dark:text-lime-200 hover:text-teal-600 underline dark:text-purple-400 text-amber-800">
        Home
      </a>
      <a
        href="/blog"
        className="text-center flex-1 font-bold cursor-pointer hover:dark:text-lime-200  hover:text-teal-600 underline dark:text-purple-400 text-amber-800">
        Bλog
      </a>
      <div className="flex-1 text-xl hover:rotate-90 transition ease-in-out text-center dark:text-purple-400 text-amber-800">
        {props.theme === 'dark' ? (
          <FontAwesomeIcon
            icon={faSun}
            className="clickable"
            onClick={() => props.setTheme('light')}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className="clickable"
            onClick={() => props.setTheme('dark')}
          />
        )}
      </div>
    </div>
  )
}

export default MobileNavBar
