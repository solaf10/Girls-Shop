<<<<<<< Updated upstream
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppWrapper from "./AppWrapper.jsx";
import "./i18n";
createRoot(document.getElementById("root")).render(
>>>>>>> Stashed changes
  <StrictMode>
    <App />
  </StrictMode>,
)
