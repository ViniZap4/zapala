import React from 'react';

import './MenuBarTop.css'

//import components
import Logo from '../Logo/Logo'
import Date from '../Date/Date'
import BoxMenuDate from '../BoxMenuDate/BoxMenuDate'
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
      <div className="MenuTopBarDate">
        <Date />
      </div>
      <div className="MenuBarTopMenu">
        
        <IconMenu 
         width={sizeMenu}
         height={sizeMenu}
         open={ message}
         close={message}
        />
      </div>
      <BoxMenuDate />
      <BoxMenuItem />
    </div>
  );
}