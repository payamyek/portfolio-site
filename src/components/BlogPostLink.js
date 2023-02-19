import { Link } from "react-router-dom"
import { getShortDate } from "../utils/dateUtils"

const BlogPostLink = (props: BlogPostProps) => {
  return (
    <div className="flex md:text-lg text-md flex-wrap md:flex-nowrap">
      <div className="underline hover:dark:text-purple-400 hover:text-amber-800">
        <Link to={`/blog/${props.title}`}>
          {props.title}
        </Link>
      </div>
      <div className="lg:ml-auto md:text-lg text-xs">{getShortDate(props.creationDate)}</div>
    </div>
  )
}

export default BlogPostLink