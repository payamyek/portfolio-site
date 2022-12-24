import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

let ProjectDetails = (props) => {
  const { link, name, tech, description } = props

  return (
    <div className="mt-5">
      <div className="flex flex-row">
      <span
        className="md:text-2xl text-xl font-light flex-1 text-purple-400">
        <span>
          {name}
        </span>
        <span className="md:inline hidden">
          &nbsp;{tech}
        </span>
      </span>
        <span
          className="md:text-2xl text-xl font-light text-purple-400">
          {link === undefined ?
            <span className="text-purple-700">
              Private
            </span> :
            <a href={link} rel="noreferrer" target="_blank"
               aria-label="View Project's Git Repository."
               className="hover:text-white">
              Git Repo <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
            </a>
          }
        </span>
      </div>
      <div className="flex flex-row mt-5">
        <div className="flex flex-col flex-1">
          <p className="md:text-xl text-sm text-white text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>)
}

export default ProjectDetails
