/**
 * The main entry point for the React application.
 *
 * @author Rhea Mimi Carillo @RheaMimiCarillo <https://github.com/RheaMimiCarillo>
 * @author UWT Game Dev Club @uwtgdc <https://github.com/uwtgdc>
 * @version 21 October 2025
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Creates root element for the React app and renders the App component.
createRoot(document.getElementById('root')).render(<App />)
