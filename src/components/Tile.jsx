/**
 * Tile.jsx
 *
 * A React component to display a single submission.
 *
 * Displays a colored tile with the author's name, message, and chosen emoji.
 *
 * @author Rhea Mimi Carillo @RheaMimiCarillo <https://github.com/RheaMimiCarillo>
 * @author UWT Game Dev Club @uwtgdc <https://github.com/uwtgdc>
 * @version 21 October 2025
 */

import React from 'react'

/**
 * A single submission tile.
 *
 * Displays a colored tile with the author's name, message, and optional emoji.
 *
 * @param {{ name: string, color: string, message: string, emoji?: string }} entry - The submission data
 * @returns {JSX.Element} The tile component
 */
export default function Tile({ entry }) {
  const bg = entry.color || '#eee' // Default color if none provided
  return (
    // The outermost div is the flex container that centers its content both horizontally and vertically
    <div style={{
      background: bg,
      border: '1px solid rgba(0,0,0,0.08)', // Subtle lil border
      borderRadius: 12, // Rounded corners
      padding: 16, // Padding the content inside the tile
      minHeight: 120, // Minimum height to ensure the tile is not too small
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
