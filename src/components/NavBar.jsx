import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
  return (
    <div className="basis-1/4 lg:flex flex-col gap-5 pt-[5%] text-xl hidden items-center select-none">
      <div className="text-3xl justify-self-start">
        {props.theme === 'dark' ? (
          <FontAwesomeIcon
            icon={faSun}
            className="clickable hover:rotate-180 transition ease-in-out delay-75"
            onClick={() => props.setTheme('light')}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className="clickable hover:rotate-180 transition ease-in-out delay-75"
            onClick={() => props.setTheme('dark')}
          />
        )}
      </div>
      <a
        href="/"
        className="font-bold cursor-pointer hover:dark:text-lime-200 hover:text-teal-700 mt-5">
        Home
      </a>
      <a
        href="/blog"
        className="font-bold cursor-pointer hover:dark:text-lime-200 hover:text-teal-700">
        Bλog
      </a>
    </div>
  )
}

export default NavBar
