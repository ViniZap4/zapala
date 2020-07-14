import React from 'react';

//import components
import MenuBarTop from '../MenuBarTop/MenuBarTop'
import TitleComponents from '../TitleComponents/TitleComponents'

//import contexts
import MenuContextProvider from '../../Context/menuContext'
import DateProvider from '../../Context/DateContext'
import TitleComponentsProvider from '../../Context/TitleComponentsContext'
import { UseTitleComponentsContext } from '../../Context/TitleComponentsContext'

export default function CreatePage(props) {

  return(
    <TitleComponentsProvider >
      <DateProvider>
        <MenuContextProvider>
          <Content name={props.id}> {props.children} </Content>
        </MenuContextProvider>
      </DateProvider>
    </ TitleComponentsProvider>
  );
} 

function Content (props){
  const { setPositionMouse } = UseTitleComponentsContext()

  return(
    <div id={props.name} className="CreatePage" onMouseMove={(e) => setPositionMouse({ x:e.pageX, y:e.pageY })}>
      <MenuBarTop />
      {props.children}
      <TitleComponents />
    </div>
  )
}