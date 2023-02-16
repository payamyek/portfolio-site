import { Link } from "react-router-dom"
import toc from "../posts/toc.json"
import { getShortDate, getYear } from "../utils/dateUtils"

type BlogPostProps = {
  id: Number,
  title: String,
  creationDate: Number
}

const Blog = () => {

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

  const renderBlogPostLinks = () => {
    // tracked years
    const years = new Set()

    // sort the table of contents
    const tocSorted = toc.sort((a, b) => b.creationDate - a.creationDate)

    // html components to render
    const htmlComponents = []

    // index to use as key
    let index = 0

    // add all components
    for (const item of tocSorted) {
      if (!years.has(getYear(item.creationDate)))
        htmlComponents.push(<h2 className="m-0" key={index++}>{getYear(item.creationDate)}</h2>)
      htmlComponents.push(<BlogPostLink id={index++} {...item} />)
    }
    return htmlComponents
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="m-0 mb-2">Blog Posts</h1>
      {renderBlogPostLinks()}
    </div>
  )
}

export default Blog
