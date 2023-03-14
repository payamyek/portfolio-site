import { projects } from '../data'
import ProjectDetails from './ProjectDetails'

const Projects = () => (
  <div>
    <div className="flex flex-row">
      <h1 className="mb-0">Projects</h1>
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
