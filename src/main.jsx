/**
 * The main entry point for the React application.
 *
 * @author Rhea Mimi Carillo <https://github.com/RheaMimiCarillo>
 * @author UWT Game Dev Club <https://github.com/uwtgdc>
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Create the root element for the React application and render the App component into it.
createRoot(document.getElementById('root')).render(<App />)
