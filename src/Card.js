import './Card.css'
import React, { useState } from 'react'

function Card({ name, species, image, gender, status, origin, location }) {
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const icon = species === 'Human' ? '👤' : '👽'

  return (
    <section
      onClick={event => {
        event.stopPropagation()
        setIsActive(!isActive)
      }}
      className={isActive ? 'Card Card--active' : 'Card'}
    >
      <img src={image} alt={name} width="50" height="50" />
      <div className="Card__details">
        {name} {icon}
        <button
          onClick={event => {
            event.stopPropagation()
            setIsVisible(!isVisible)
          }}
        >
          {isVisible ? 'Show Details' : 'Hide Details'}
        </button>
        <ul hidden={isVisible}>
          <li>{gender}</li>
          <li>{status}</li>
          <li>{origin}</li>
          <li>{location}</li>
        </ul>
      </div>
    </section>
  )
}

export default Card
