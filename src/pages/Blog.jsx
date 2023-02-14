const Blog = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="m-0">Blog Posts</h1>
      <BlogPost />
      <BlogPost></BlogPost>
      <BlogPost></BlogPost>
      <BlogPost></BlogPost>
      <BlogPost></BlogPost>
      <BlogPost></BlogPost>
    </div>
  )
}

const BlogPost = () => {
  return (
    <div className="flex">
      <div>
        Python's Greatest Crux (The GIL)
      </div>
      <div className="ml-auto">Posted 4 Days Ago</div>
    </div>
  )
}

export default Blog
