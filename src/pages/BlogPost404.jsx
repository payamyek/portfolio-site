import { Link } from "react-router-dom"

const BlogPost404 = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col text-center justify-center">
        <h1>404 Blog Post Not Found</h1>
        <h2>What are you looking for? You have entered the shadow realm 👀</h2>
        <Link to="/blog" className="underline hover:dark:text-purple-400 hover:text-amber-800">Lets Go Back Home</Link>
      </div>
    </div>
  )
}

export default BlogPost404