import React  from 'react';

import './CloseIcon.css'

export default function CloseIcon(props) {
  const CloseIconLineStyle = {
    backgroundColor:`${props.color}`,
    boxShadow: `${props.shadowSize}  ${props.shadowColor}`,
  
  }

  return (
    <div className="CloseIcon" onClick={props.onClick} >
      <span className="CloseIconLine" style={CloseIconLineStyle} id="CloseIconLine0"></span>
      <span className="CloseIconLine" style={CloseIconLineStyle} id="CloseIconLine1"></span>
      <span className="CloseIconUnderLine" style={CloseIconLineStyle}></span>
    </div>
  );
} 