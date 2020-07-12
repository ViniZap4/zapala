import React, { useState } from 'react';

import './FullScreenIcon.css'

export default function FullScreenIcon(props) {
  const color = props.color
  const size = props.sizeLine
  const [ ValueRotate, setValueRotate ] = useState('0deg')

  const styleDefault ={
    OneLineOne:{
      borderTop:  `${size} solid ${color}`,
      borderLeft: `${size} solid ${color}`,
      transform:`rotate(${ValueRotate})`,
    },
    OneLineTwo:{
      borderTop:  `${size} solid ${color}`,
      borderRight:`${size} solid ${color}`,
      transform:`rotate(${ValueRotate})`,
    },
    TwoLineOne:{
      borderBottom:`${size} solid ${color}`,
      borderLeft:  `${size} solid ${color}`,
      transform:`rotate(${ValueRotate})`,
    },
    TwoLineTwo:{
      borderBottom:`${size} solid ${color}`,
      borderRight: `${size} solid ${color}`,
      transform:`rotate(${ValueRotate})`,
    }
  }
  const [ StateIcon, setStateIcon] = useState(false)

  function switchStateIcon(){
    if(StateIcon){
      setStateIcon(false)
      setValueRotate("0")
    }else{
      setStateIcon(true)
      setValueRotate("180deg")
    }
  }




  return (
    <div className="FullScreenIcon" onClick={switchStateIcon} >
      <LineIcon 
        LineOne={styleDefault.OneLineOne}
        LineTwo={styleDefault.OneLineTwo}
      />
      <LineIcon
        LineOne={styleDefault.TwoLineOne}
        LineTwo={styleDefault.TwoLineTwo}
      />
    </div>
  );
}

function LineIcon(props){
  return(
    <div className="LineFullScreenIcon">
      <ItemIconFragment style={props.LineOne}/>
      <ItemIconFragment style={props.LineTwo}/>
      
    </div>
  )
}

function ItemIconFragment(props){
  return(
    <span className="ItemFragmentLineFullScreeIcon" style={props.style}></span>
  )
}