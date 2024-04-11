import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutProjectPage from './pages/AboutProjectPage'
import AboutMePage from './pages/AboutMePage'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'about-project',
    element: <AboutProjectPage />
  },
  {
    path: 'about-me',
    element: <AboutMePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
