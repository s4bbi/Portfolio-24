import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Homepage from './pages/Homepage.jsx'

const AppComponent = () => {
  return (
    <div>
      <Header />
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
    <RouterProvider router={AppRouter} /> 
  </React.StrictMode>,
)
