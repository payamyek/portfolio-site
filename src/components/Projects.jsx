import { projects } from '../data'
import ProjectDetails from './ProjectDetails'
import SectionHeading from './SectionHeading.tsx'

const Projects = () => (
  <div className="flex-col flex md:mt-6 mt-5">
    <div className="flex flex-row">
      <SectionHeading content="Projects" />
    </div>
    {projects.map((project, i) => (
      <ProjectDetails
        {...project}
        key={i}
      />
    ))}
  </div>
)

export default Projects
