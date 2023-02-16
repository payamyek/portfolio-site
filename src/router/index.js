import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from "../pages/Home"

/* lazy load components */
const Blog = React.lazy(() => import('../pages/Blog'))
const BlogPost = React.lazy(() => import("../pages/BlogPost"))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog',
    element: (
      <React.Suspense fallback={<h1>Loading</h1>}>
        <Blog />
      </React.Suspense>
    ),
  },
  {
    path: '/blog/:id',
    element: (
      <React.Suspense fallback={<h1>Loading</h1>}>
        <BlogPost />
      </React.Suspense>
    ),
  },
])

export default router
