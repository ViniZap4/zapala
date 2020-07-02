import React from 'react';

import './AuthorIcon.css'

export default function AuthorIcon(props) {
  
  const size = { width:props.size, height:props.size}
  const color = {backgroundColor:props.color}
  
  
  return (
    <div className="AuthorIcon" style={size}>
      <div className="AuthorIconHead" style={color}>

      </div>
      <div className="AuthorIconBody" style={color}>

      </div>
    </div>
  );
}
