import React, { createContext, useState, useContext } from 'react';

const MenuContext = createContext()

export default function MenuContextProvider(props) {
  const [StateMenu, setStateMenu] = useState(false)

  return (
    <MenuContext.Provider
      value={{
       StateMenu, 
        setStateMenu
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}

export function useMenubarContext(){
  const context = useContext(MenuContext)
  if(!context) throw console.error("The useMenubarContext need insize in MenuContextProvider ");
  const {
    StateMenu,
    setStateMenu
  } = context
  return{
    StateMenu,
    setStateMenu
  }
}