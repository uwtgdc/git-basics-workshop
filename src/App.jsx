/**
 * App.jsx
 *
 * The main App component.
 *
 * Displays a list of submissions from the server.
 *
 * Loading state is handled with a simple "Loading..." message.
 * Error state is handled with a message "Could not load submissions yet. Try refreshing in a few seconds."
 *
 * @author Rhea Mimi Carillo @RheaMimiCarillo <https://github.com/RheaMimiCarillo>
 * @author UWT Game Dev Club @uwtgdc <https://github.com/uwtgdc>
 * @version 21 October 2025
 */

import React, { useEffect, useState } from 'react'
import Tile from './components/Tile.jsx'

// use base from Vite dynamically
// import.meta.env.BASE_URL is set from vite.config.js `base` (e.g., "/git-basics-workshop/")
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

/**
 * The main App component.
 *
 * Displays a list of submissions from the server.
 *
 * Loading state is handled with a simple "Loading..." message.
 * Error state is handled with a message "Could not load submissions yet. Try refreshing in a few seconds."
 *
 * @returns {JSX.Element} The main App component.
 */
export default function App() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
  /**
   * Loads the list of submissions.
   *
   * Runs when the component mounts.
   * Fetches the list of submissions and stores it in state.
   * If there is an error, it sets the error state and displays a message.
   * If there is no error, it sets the loading state to false.
   *
   * @returns {Promise<void>} Resolves when the list of submissions is loaded, rejects when there is an error.
   */
    async function load() {
      try {
        const res = await fetch(`${BASE}/submissions/index.json?ts=${Date.now()}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const list = await res.json()
        setEntries(list)
      } catch (e) {
        setError('Could not load submissions yet. Try refreshing in a few seconds.')
      } finally {
        // To cease loading.
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <main style={{maxWidth: 1100, margin: '2rem auto', padding: '0 1rem'}}>
      <h1>🎨 UWT Game Dev Club Git Basics Workshop: Collaborative Mosaic</h1>
      <p>Each tile below was added via a Pull Request during our Git 101 workshop!</p>
      {loading && <p>Loading…</p>}
      {error && <p role="alert">{error}</p>}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '12px',
        marginTop: '1rem'
      }}>
        {entries.map((e, i) => <Tile key={i} entry={e} />)}
      </div>
      <footer style={{marginTop: '2rem', opacity: 0.7}}>
        <small>Site auto-updates on each merge to <code>main</code>. Built with Vite + GitHub Pages.</small>
      </footer>
    </main>
  )
}
