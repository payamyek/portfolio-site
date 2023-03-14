import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let ProjectDetails = (props) => {
  const { link, name, tech, description } = props

  return (
    <div className="flex flex-col md:mt-3 mt-2">
      <div className="flex flex-row">
        <span className="flex-1">
          <h2 className="dark:text-purple-400 inline underline">{name}</h2>
          <span className="md:inline hidden md:text-base text-yellow-800 dark:text-lime-400">
            &nbsp;{tech}
          </span>
        </span>
        <h2 className="font-light text-green-800 dark:text-purple-400">
          {link === undefined ? (
            'Private'
          ) : (
            <a
              href={link}
              rel="noreferrer"
              target="_blank"
              aria-label="View Project's Git Repository."
              className="hover:text-green-700 dark:hover:text-purple-50">
              Code&nbsp;
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="clickable"
              />
            </a>
          )}
        </h2>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col flex-1">
          <p className="lg:text-xl md:text-lg text-sm dark:text-white text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
