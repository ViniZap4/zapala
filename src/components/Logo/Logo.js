import React from 'react';

import './Logo.css'

//import components
import LogoIcon from '../../images/zapala/zapala-logo-app.png'

export default function Logo(props) {
  return (
    <div className="Logo"
      style={{
        width:props.width,
        height:props.height
      }}
    >
      <span
        className="iconLogo"
        style={{backgroundImage:`url("${LogoIcon}")`}}
      ></span>
    </div>
  );
}

 