import React from 'react'
import styles from './BoxLeftTop.css'
import Webcam from "react-webcam"

const BoxLeftTop = () => { 
  return(
    <div className="container">
      <p>Player 1 Camera!</p>
      <Webcam width={400} />
    </div>
  )
}

export default BoxLeftTop