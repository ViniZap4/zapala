import React from 'react';

import './CloseIcon.css'

export default function CloseIcon(props) {
  return (
    <div className="CloseIcon" onClick={props.onClick}>
      <span className="CloseIconLine" id="CloseIconLine0"></span>
      <span className="CloseIconLine" id="CloseIconLine1"></span>
      <span className="CloseIconUnderLine"></span>
    </div>
  );
} 