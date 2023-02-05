import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let ProjectDetails = (props) => {
  const { link, name, tech, description } = props

  return (
    <div>
      <div className="flex flex-row">
        <span className="flex-1 mt-3">
          <h2 className="dark:text-purple-400 inline underline">{name}</h2>
          <span className="md:inline hidden md:text-base text-yellow-800 dark:text-lime-400">
            &nbsp;{tech}
          </span>
        </span>
        <h2 className="font-light text-green-800 dark:text-purple-400 mt-3 mb-0">
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
      <div className="flex flex-row mt-5">
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
