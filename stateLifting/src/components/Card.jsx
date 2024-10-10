import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <input type="text" onChange= {(e) => props.setName(e.target.value)}/>
        <p>The name is: {props.name}</p>
    </div>
  )
}

export default Card