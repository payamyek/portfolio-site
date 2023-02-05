import { projects } from '../data'
import ProjectDetails from './ProjectDetails'

const Projects = () => (
  <div className="flex-col flex md:mt-6 mt-5">
    <div className="flex flex-row">
      <h1>Projects</h1>
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
