import React from 'react';
import './GameRender.scss'
import gamecube from "../../assets/gamecube.jpeg"

export default function GameRender() {
  function returnCordinates(e){
    console.log(e)
    const offsetX = e.nativeEvent.offsetX
    const offsetY = e.nativeEvent.offsetY
    const offsetWidth = e.target.offsetWidth
    const offsetHeight = e.target.offsetHeight
    const originalWidth = 1080
    const originalHeight= 1842
    const growthFactorY = offsetHeight/originalHeight
    const growthFactorX = offsetWidth/originalWidth
    const targetX = offsetX/growthFactorX
    const targetY = offsetY/growthFactorY
    console.log(offsetX)
    console.log(offsetY)
    console.log(offsetWidth)
    console.log(offsetHeight)
    console.log(offsetHeight/originalHeight)
    console.log(offsetHeight/growthFactorY)
    console.log(targetX)
    console.log(targetY)
  }
  // 1842
  // 1080
  return (
    <div className='GameContainer'>
      <img src={gamecube} alt="gamecube" onClick={returnCordinates}></img>
    </div>
  )
}
