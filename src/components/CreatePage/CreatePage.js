import React from 'react';

//import components
import MenuBarTop from '../MenuBarTop/MenuBarTop'

//import contexts
import MenuContextProvider from '../../Context/menuContext'

export default function CreatePage(props) {

  return (
    <MenuContextProvider>
      <div  id={props.id} className="CreatePage">
        <MenuBarTop />
        {props.children}
      </div>
    </MenuContextProvider>
  );
} 