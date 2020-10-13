import React from 'react'
import '../Main/main.css'
import Position from './Position'
import Picture from './Picture'

export default () => {
  return (
    <div className="newPosition">
      <div className="newPosition-content">
        <Position />
        <Picture />
      </div>
    </div>
  )
} 