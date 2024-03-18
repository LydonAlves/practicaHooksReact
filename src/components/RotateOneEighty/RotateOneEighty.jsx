import React, { useState } from 'react'

const RotateOneEighty = ({ src, alt }) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive((current) => !current)
  }

  const activeStyle = {
    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg',
    transition: 'transform 0.5 ease'
  }

  return <img src={src} alt={alt} onClick={handleClick} style={activeStyle} />
}

export default RotateOneEighty
