import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const UserDetails = () => (
  <div className="md:flex md:flex-row hidden gap-x-4 mt-1">
    <div className="flex flex-col">
      <span className="md:text-lg">
        <FontAwesomeIcon
          icon={faMapPin}
        />{' '}
        <span className='text-amber-800 dark:text-purple-400'>Toronto, Canada</span>
      </span>
    </div>
    <div className="flex flex-col">
      <span className="md:text-lg">
        <FontAwesomeIcon
          icon={faGraduationCap}
        />{' '}
        <span className='text-amber-800 dark:text-purple-400'>
          2022 UofT B.Sc (Hons)
        </span>
      </span>
    </div>
  </div>
)

export default UserDetails;