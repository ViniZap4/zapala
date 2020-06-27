import React from 'react';

import './MenuBarTop.css'

//import components
import Logo from '../Logo/Logo'
import IconMenu from '../IconMenu/IconMenu'
import BoxMenuItem from '../BoxMenuItem/BoxMenuItem'

export default function MenuBarTop(props) {
  const sizeLogoMenu = "5.4vmin"
  const sizeMenu = "3.6vmin"

  function message(){
    console.log("opened")
  }

  return (
    <div className="MenuBarTop">
      <div className="MenuBarTopLogo">
        <Logo 
          width={sizeLogoMenu}
          height={sizeLogoMenu}
        />
        Zapalá
      </div>
      <div>
        data
      </div>
      <div className="MenuBarTopMenu">
        <IconMenu 
         width={sizeMenu}
         height={sizeMenu}
         open={ message}
         close={message}
        />
      </div>
      <BoxMenuItem />
    </div>
  );
}

