import { Link } from "react-router-dom"

const BlogPost404 = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col text-center justify-center">
        <h1>404 Page Not Found</h1>
        <h2>You're Lost! You Shouldn't Be Here 👀</h2>
        <Link to="/" className="underline hover:dark:text-purple-400 hover:text-amber-800">Lets Get Back To Safety</Link>
      </div>
    </div>
  )
}

export default BlogPost404