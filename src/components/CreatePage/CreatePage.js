import React from 'react';

//import components
import MenuBarTop from '../MenuBarTop/MenuBarTop'

//import contexts
import MenuContextProvider from '../../Context/menuContext'
import DateProvider from '../../Context/DateContext'

export default function CreatePage(props) {

  return (
    <DateProvider>
      <MenuContextProvider>
        <div  id={props.id} className="CreatePage">
          <MenuBarTop />
          {props.children}
        </div>
      </MenuContextProvider>
    </DateProvider>
  );
} 