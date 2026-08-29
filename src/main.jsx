import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter enables client-side routing — page changes swap
        components in-place with NO full browser reload, which is what
        keeps the sidebar/navbar from flickering or disappearing. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
