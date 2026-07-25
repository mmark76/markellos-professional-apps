import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './footer-overrides.css'
import './content-width-overrides.css'
import './hide-hero-buttons.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
