/**
 * Tile.jsx
 *
 * A React component to display a single submission.
 *
 * Displays a colored tile with the author's name and message.
 *
 * @author Rhea Mimi Carillo <https://github.com/RheaMimiCarillo>
 * @author UWT Game Dev Club <https://github.com/uwtgdc>
 */

import React from 'react'

/**
 * A React component to display a single submission.
 *
 * Displays a colored tile with the author's name, message, and optional emoji.
 *
 * @param {{ name: string, color: string, message: string, emoji?: string }} entry - The submission data
 * @returns {JSX.Element} The tile component
 */
export default function Tile({ entry }) {
  const bg = entry.color || '#eee' // default color if none provided
  return (
    // The outermost div is a flex container
    // that centers its content both horizontally and vertically
    <div style={{
      background: bg,
      border: '1px solid rgba(0,0,0,0.08)', // subtle border
      borderRadius: 12, // rounded corners
      padding: 16, // pad the content inside the tile
      minHeight: 120, // minimum height to ensure the tile is not too small
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{fontSize: '1.2rem', lineHeight: 1.1, textAlign: 'center'}}>
        <strong>{entry.name || 'Anon'}</strong>
      </div>
      <div style={{fontSize: '1.6rem', marginTop: 8}}>{entry.emoji || ''}</div>
      <div style={{marginTop: 8, textAlign: 'center'}}>{entry.message || ''}</div>
    </div>
  )
}
