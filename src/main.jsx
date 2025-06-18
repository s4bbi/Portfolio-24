import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Homepage from './pages/Homepage.jsx';
import SmoothScrolling from './utils/SmoothScrolling.jsx';
import Loader from './components/Loader.jsx'; // Imported from components folder

const AppComponent = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3100);
    return () => clearTimeout(timer);
  }, []);

  return (
   <>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScrolling>
      <RouterProvider router={AppRouter} />
    </SmoothScrolling>
  </React.StrictMode>,
);
