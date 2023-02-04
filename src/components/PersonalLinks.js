import { links } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PersonalLinks = () => (
  <div className="md:flex-1 md:text-3xl md:mt-0 flex text-xl mt-3 font-bold text-center items-end">
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
          className="hover:scale-105"
        />
      </a>
    ))}
  </div>
)

export default PersonalLinks;