import { experiences } from '../data'
import { getDateRange } from '../utils/dateUtils'

const Experiences = () => (
  <div className="flex-col flex md:mt-6 mt-5">
    <div className="flex flex-row">
      <h1>Experiences</h1>
    </div>
    <div className="flex flex-row">
      <ul className="dark:text-white text-amber-800 lg:text-xl md:text-l text-sm flex-1">
        {experiences.map((data, i) => (
          <li
            className="flex"
            key={i}>
            <span className="font-bold flex-1">
              {data.position} @ {data.company}
            </span>
            <span className="md:hidden ">{data.startDate.getFullYear()}</span>
            <span className="md:inline hidden dark:text-purple-400 text-teal-800">
              {getDateRange(data.startDate, data.endDate)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Experiences
