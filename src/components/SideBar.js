import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const SideBar = (props) => {
  return (
    <div className="basis-1/4 flex flex-col gap-5 pt-[5%] pl-16 text-xl">
      {props.theme === 'dark' ? (
        <FontAwesomeIcon
          icon={faSun}
          className="self-start text-3xl justify-self-start hover:scale-110 hover:rotate-90 transition ease-in-out delay-550 cursor-pointer"
          onClick={() => props.setTheme('light')}
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className="self-start text-3xl justify-self-start hover:scale-110 hover:rotate-[360deg] transition ease-in-out delay-550 cursor-pointer"
          onClick={() => props.setTheme('dark')}
        />
      )}
      <a
        href="/"
        className="font-bold cursor-pointer hover:dark:text-lime-200 hover:text-teal-600 pt-5">
        Home
      </a>
      <a
        href="/blog"
        className="font-bold cursor-pointer hover:dark:text-lime-200  hover:text-teal-600">
        Bλog
      </a>
    </div>
  )
}

export default SideBar
