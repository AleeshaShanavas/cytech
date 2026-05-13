import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Redirect to home page on any reload, before React even mounts
if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
  if (window.location.pathname !== '/') {
    window.location.replace('/')
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
