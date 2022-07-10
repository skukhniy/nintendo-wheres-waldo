import React from 'react';
import './GameRender.scss'
import gamecube from "../../assets/gamecube.jpeg"

export default function GameRender() {
  // this function will grab the current image data and divide it by the 
  // original image data to find the accurate cordinates of a character
  // no matter the screen size
  function returnCordinates(e){
    console.log(e)
    // gets the current click cordinates in relation to the image
    const offsetX = e.nativeEvent.offsetX
    const offsetY = e.nativeEvent.offsetY
    // this is the size of the image in the HTML
    const offsetWidth = e.target.offsetWidth
    const offsetHeight = e.target.offsetHeight
    // the original resolution of the image
    const originalWidth = 1080
    const originalHeight= 1842
    // determines how much the image grew once it was added to the HTML
    const growthFactorY = offsetHeight/originalHeight 
    const growthFactorX = offsetWidth/originalWidth
    // reverses the growth to find what the cordinates would be at the original image resolution
    const targetX = offsetX/growthFactorX 
    const targetY = offsetY/growthFactorY
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
