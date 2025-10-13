import React from 'react'


/* Represents a single tile in the mosaic
 *
 */
export default function Tile({ entry }) {
  const bg = entry.color || '#eee'
  return (
    <div style={{
      background: bg,
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: 12,
      padding: 16,
      minHeight: 120,
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
