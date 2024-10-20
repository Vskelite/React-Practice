import React from 'react'
import ChildB from './ChildB'
import './ChildA.css'

const ChildA = () => {
  return (
    <div id='boxA'>
        <ChildB />
    </div>
  )
}

export default ChildA