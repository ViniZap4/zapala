import React, { useState, useEffect } from 'react';

import './BoxMenuItem.css'

// import components
import ItemBoxMenuItem from './ItemBoxMenuItem/ItemBoxMenuItem'

// import Context
import { useMenubarContext } from '../../Context/menuContext'

export default function BoxMenuItem(props) {
  const { StateMenu } = useMenubarContext()
  const [styleBox, setStyleBox] = useState({})

  useEffect(()=>{
    if(StateMenu)
      setStyleBox({
        right:" 0.9vmax",
        top:"10vmin",
        opacity: 1,
        zIndex:5,
        transform: "scale(1)",
      })
    else{
      setStyleBox({})
    }
  },[StateMenu])

  return (
    <div className="BoxMenuItem" style={styleBox}>
      
     <ItemBoxMenuItem href="#">
       Home
     </ItemBoxMenuItem>
     <ItemBoxMenuItem href="#">
        Minha galeria
     </ItemBoxMenuItem>
     <ItemBoxMenuItem href="#">
        Artigos
     </ItemBoxMenuItem >
     <ItemBoxMenuItem href="#">
        Música
     </ItemBoxMenuItem >
     <ItemBoxMenuItem href="#">
        Apps
     </ItemBoxMenuItem >
     <ItemBoxMenuItem href="#">
        Jogos
     </ItemBoxMenuItem >
     <ItemBoxMenuItem href="#">
        Animações
     </ItemBoxMenuItem >

    </div>
  );
}
 