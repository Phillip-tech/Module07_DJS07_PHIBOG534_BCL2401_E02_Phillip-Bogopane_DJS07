/*Import necessary libraries from React and ReactDOM*/
import React from 'react'
import ReactDOM from 'react-dom/client'

/* Import the main component App and CSS file*/
import App from './App.jsx'
import './index.css'

/*Render the main App component inside the root element */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  // Render the main App component
  </React.StrictMode>,
)