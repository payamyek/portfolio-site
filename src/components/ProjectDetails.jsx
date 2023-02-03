import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let ProjectDetails = (props) => {
  const { link, name, tech, description } = props

  return (
    <div className="mt-5">
      <div className="flex flex-row">
        <span className="flex-1">
          <span className="md:text-2xl text-xl underline dark:text-purple-400">
            {name}
          </span>
          <span className="md:inline hidden md:text-base text-yellow-800 dark:text-lime-400">
            &nbsp;{tech}
          </span>
        </span>
        <span className="md:text-2xl text-xl font-light text-green-800 dark:text-purple-400">
          {link === undefined ? (
            <span className="">Private</span>
          ) : (
            <a
              href={link}
              rel="noreferrer"
              target="_blank"
              aria-label="View Project's Git Repository."
              className="hover:text-green-600 dark:hover:text-purple-50">
              Code&nbsp;
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </span>
      </div>
      <div className="flex flex-row mt-5">
        <div className="flex flex-col flex-1">
          <p className="md:text-xl text-sm dark:text-white text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
