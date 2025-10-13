import React, { useEffect, useState } from 'react'
import Tile from './components/Tile.jsx'

const BASE = '/git-basics-workshop' // make sure this matches const BASE in vite.config.js base

export default function App() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BASE}/submissions/index.json?ts=${Date.now()}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const list = await res.json()
        setEntries(list)
      } catch (e) {
        setError('Could not load submissions yet. Try refreshing in a few seconds.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <main style={{maxWidth: 1100, margin: '2rem auto', padding: '0 1rem'}}>
      <h1>🎨 UWT Game Dev • Collaborative Mosaic</h1>
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
