const Blog = () => {
  return (
    <div className="flex flex-col">
      <h1>Blog Posts</h1>
      <BlogPost />
    </div>
  )
}

const BlogPost = () => {
  return (
    <div className="flex place-content-between py-3 text-center items-center">
      <div className="basis-3/5 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="flex-1">10,000 Views</div>
      <div className="flex-1">Posted 4 Days Ago</div>
    </div>
  )
}

export default Blog
