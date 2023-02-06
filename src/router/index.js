import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import React from 'react'

const Blog = React.lazy(() => import('../pages/Blog'))

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
])

export default router
