// index.jsx - Entry point for the React application
// Renders the App component to the DOM

import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
