import React, { useState, useEffect } from 'react';

import './TitleComponents.css'

//import contexts
import { UseTitleComponentsContext } from '../../Context/TitleComponentsContext'


export default function TitleComponents(props) {
  const { PositionMouse, PositionTitleChange, TextTitleComponent, TitleContentVisible} = UseTitleComponentsContext()
  const [ StyleContent, setStyleContent ] = useState(0)

  useEffect(()=>{
    if(TitleContentVisible){
      setStyleContent(1)
    }else{
      setStyleContent(0)
    }

  },[TitleContentVisible])

  

  return (
    <div
      className="TitleComponents"
      style={{
        left:`${PositionMouse.x + PositionTitleChange.x}px`, 
        top: `${PositionMouse.y + PositionTitleChange.y}px`,
        transform: `scale(${StyleContent})`,
      }}
     >
      <span className="TitleComponentsText">
        {TextTitleComponent}
      </span>
    </div>
  );
} 