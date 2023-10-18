import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthContexts from './contexts/AuthContexts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContexts>
  <RouterProvider router={router}></RouterProvider>
  </AuthContexts>
  </React.StrictMode>,
)
