import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  const id = useParams();
  return (
    <div>About
      <h1>id : {id}</h1>
    </div>
  )
}

export default About