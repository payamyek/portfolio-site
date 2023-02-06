import AboutMe from '../components/AboutMe'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'

import './Home.css'

let Home = () => {
  return (
    <div className="flex flex-col md:gap-7 gap-4">
      <AboutMe />
      <Experiences />
      <Projects />
    </div>
  )
}

export default Home
