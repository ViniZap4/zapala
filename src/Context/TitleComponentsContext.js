import React, { createContext, useState, useContext } from 'react';

const TitleComponents = createContext()

export default function TitleComponentsProvider(props) {
  const [PositionMouse, setPositionMouse] = useState({x:0, y:0})
  const [PositionTitleChange, setPositionTitleChange ] = useState({x:0, y:0})
  const [TextTitleComponent, setTextTitleComponent ] = useState("Zapalá")
  const [TitleContentVisible,setTitleContentVisible  ]= useState(false)

  return (
    <TitleComponents.Provider
      value={{
        PositionMouse, 
        setPositionMouse,
        PositionTitleChange,
        setPositionTitleChange,
        TextTitleComponent,
        setTextTitleComponent,
        TitleContentVisible,
        setTitleContentVisible
      }} 
    >
      {props.children}
    </TitleComponents.Provider>
  );
}

export function UseTitleComponentsContext(){
  const context = useContext(TitleComponents)
  if(!context) throw console.error("The TitleComponentsContext need insize in TitleComponentsProvider ");
  const {
    PositionMouse,
    setPositionMouse,
    PositionTitleChange,
    setPositionTitleChange,
    TextTitleComponent,
    setTextTitleComponent,
    TitleContentVisible,
    setTitleContentVisible
    
  } = context
  return{
    PositionMouse,
    setPositionMouse,
    PositionTitleChange,
    setPositionTitleChange,
    TextTitleComponent,
    setTextTitleComponent,
    TitleContentVisible,
    setTitleContentVisible
  }
}