import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from "../layouts/RootLayout"
import Home from "../pages/Home"

/* lazy load components */
const Blog = React.lazy(() => import('../pages/Blog'))
const BlogPost = React.lazy(() => import("../pages/BlogPost"))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ]
  },
  {
    path: '/blog',
    element: <RootLayout isCondensedView />,
    children: [
      {
        path: '',
        element: (
          <React.Suspense fallback={<h1>Loading</h1>}>
            <Blog />
          </React.Suspense>
        ),
      },
      {
        path: ':id',
        element: (
          <React.Suspense fallback={<h1>Loading</h1>}>
            <BlogPost />
          </React.Suspense>
        ),
      },
    ]
  }
])

export default router
