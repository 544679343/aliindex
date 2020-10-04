import React from 'react'
import '../BotMain/botmain.css'
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