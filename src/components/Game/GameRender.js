import React, { useState } from 'react';
import './GameRender.scss';
// import {
//   getDoc, doc,
// } from 'firebase/firestore';
// import db from '../../firebase';
import gamecube from '../../assets/gamecube.jpeg';
import ClickModal from '../ClickModal/ClickModal';

export default function GameRender() {
  const [clickModalState, setClickModal] = useState(false);

  // const luigiRef = doc(db, 'Cordinates', 'Luigi');
  // getDoc(luigiRef)
  //   .then((document) => {
  //     console.log(document.data());
  //   });
  // function returnCordinates(e) {
  //   // gets the current click cordinates in relation to the image
  //   const { offsetX } = e.nativeEvent;
  //   const { offsetY } = e.nativeEvent;
  //   // this is the size of the image in the HTML
  //   const { offsetWidth } = e.target;
  //   const { offsetHeight } = e.target;
  //   // the original resolution of the image
  //   const originalWidth = 1080;
  //   const originalHeight = 1842;
  //   // determines how much the image grew once it was added to the HTML
  //   const growthFactorY = offsetHeight / originalHeight;
  //   const growthFactorX = offsetWidth / originalWidth;
  //   // reverses the growth to find what the cordinates would be at the original image resolution
  //   const targetX = offsetX / growthFactorX;
  //   const targetY = offsetY / growthFactorY;
  //   console.log(`X: ${targetX}`);
  //   console.log(`Y: ${targetY}`);
  //   return { xCord: targetX, yCord: targetY };
  // }
  // // 1842
  // // 1080
  return (
    <div className="GameContainer">
      <img src={gamecube} alt="gamecube" onClick={() => setClickModal(!clickModalState)} />
      {clickModalState && <ClickModal />}
    </div>
  );
}
