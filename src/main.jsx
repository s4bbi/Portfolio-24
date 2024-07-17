import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Homepage from './pages/Homepage.jsx'
import SmoothScrolling from './utils/SmoothScrolling.jsx'

const AppComponent = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    children: [
      {
        path: '/',
        element: <Homepage/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScrolling>
      <RouterProvider router={AppRouter} /> 
    </SmoothScrolling>
    
  </React.StrictMode>,
)
