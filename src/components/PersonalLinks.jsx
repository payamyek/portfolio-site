import { links } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PersonalLinks = () => (
  <div className="lg:flex-1 lg:text-3xl lg:mt-0 flex text-xl md:mt-3 mt-1 font-bold text-center items-end md:mb-0 mb-4">
    {links.map((link, i) => (
      <a
        className="flex-1 cursor-pointer"
        href={link.url}
        target="_blank"
        rel="noreferrer"
        aria-label={link.ariaLabel}
        key={i}>
        <FontAwesomeIcon
          icon={link.icon}
          className="clickable"
        />
      </a>
    ))}
  </div>
)

export default PersonalLinks
