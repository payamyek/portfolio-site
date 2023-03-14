import { Link } from 'react-router-dom'
import { getShortDate } from '../utils/dateUtils'

const BlogPostLink = (props: BlogPostProps) => {
  return (
    <div className="flex md:text-lg text-md flex-wrap md:flex-nowrap justify-between">
      <div className="underline hover:dark:text-purple-400 hover:text-amber-800">
        <Link to={`/blog/${props.title}`}>{props.title}</Link>
      </div>
      <div>{getShortDate(props.creationDate)}</div>
    </div>
  )
}

export default BlogPostLink
