import { Link } from "react-router-dom"
import { getShortDate } from "../utils/dateUtils"

const BlogPostLink = (props: BlogPostProps) => {
  return (
    <div className="flex">
      <div className="underline hover:dark:text-purple-400 hover:text-amber-800">
        <Link to={`/blog/${props.title}`}>
          {props.title}
        </Link>
      </div>
      <div className="ml-auto">{getShortDate(props.creationDate)}</div>
    </div>
  )
}

export default BlogPostLink