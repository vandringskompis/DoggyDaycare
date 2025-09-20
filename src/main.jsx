import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home.jsx'
import Catalog from './Pages/Catalog.jsx'
import DogInfo from './Pages/DogInfo.jsx'

const router = createHashRouter([

  {
    path: "/",
    Component: Home
  },
  {
    path: "/Catalog",
    Component: Catalog
  },
  {
    path: "/Catalog/DogInfo",
    Component: DogInfo
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
