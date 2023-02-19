import BlogPostLink from "../components/BlogPostLink"
import toc from "../posts/toc.json"
import { getYear } from "../utils/dateUtils"

const Blog = () => {

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
        htmlComponents.push(<h2 className="m-0 text-amber-800 dark:text-purple-400" key={index++}>{getYear(item.creationDate)}</h2>)
      htmlComponents.push(<BlogPostLink id={index++} {...item} />)
    }
    return htmlComponents
  }

  return (
    <div className="flex flex-col md:gap-4 gap-2">
      <h1 className="md:mb-2 m-0">Blog Posts</h1>
      {renderBlogPostLinks()}
    </div>
  )
}

export default Blog
