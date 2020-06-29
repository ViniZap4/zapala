import React from 'react';

import './ItemBoxMenuItem.css'



export default function ItemBoxMenuItem(props) {

  
  return (
   
    <a href={props.href} 
      className="ItemBoxMenuItem" 

    >
     <span className="ItemBoxMenuItemIcon">➤</span> {props.children}
    </a>
  );
}
