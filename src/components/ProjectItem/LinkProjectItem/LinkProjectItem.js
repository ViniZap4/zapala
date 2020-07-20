import React from 'react';

import './LinkProjectItem.css'

export default function LinkProjectItem(props) {

  var contentIcon;
  if(props.icon === "component"){
     contentIcon=props.componentContent
  }else{
     contentIcon = (<span className="LinkProjectItemIcon"
    style={{backgroundImage:`url(${props.iconSrc})`}}
    >
    </span>)
  }

  return (
    <div className="LinkProjectItem" style={props.style}>
      <div className="LinkProjectItemTextArea">
        <span className="LinkProjectItemText">
          <div className="LinkProjectItemIconArea">
            {contentIcon}
          </div>
          {props.children}
        </span>
        <span className="LinkProjectItemUnderline"></span>
      </div>
    </div>
  );
}
