import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from "../layouts/RootLayout"
import ErrorPage404 from "../pages/ErrorPage404"
import Home from "../pages/Home"

/* lazy load components */
const Blog = React.lazy(() => import('../pages/Blog'))
const BlogPost = React.lazy(() => import("../pages/BlogPost"))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage404 />,
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
