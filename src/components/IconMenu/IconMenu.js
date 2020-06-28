import React, { useState } from 'react';

import './IconMenu.css'

//import contexts
import {useMenubarContext} from '../../Context/menuContext'


export default function IconMenu(props) {
  const { StateMenu, setStateMenu } = useMenubarContext()
  const [ElementIconMenu0, setElementIconMenu0 ] = useState({style:{},id:"ElementIconMenustyle0"})  
  const [ElementIconMenu1, setElementIconMenu1 ] = useState({style:{},id:"ElementIconMenustyle1"})
  const [ElementIconMenu2, setElementIconMenu2 ] = useState({style:{},id:"ElementIconMenustyle2"})
  const [StyleText, setStyleText] = useState({Text:{},underline:{}})
  const [TitleIcon, SetTitleIcon ] = useState("Abrir Menu")
  
  function SwitchControllMenu(){
    if(!StateMenu){
      setElementIconMenu0({
        style:{
          transform:'rotate(45deg)',
          transformOrigin:"6% 100%"
        },
        id:"ElementIconMenustyleClick"

      })
      setElementIconMenu1({
        style:{
          opacity:0,
          transform: "scale(0.5)",
        },

      })
      setElementIconMenu2({
        style:{
          transform:'rotate(-45deg)',
          transformOrigin:"10% 40%"
          
        },
        id:"ElementIconMenustyleClick"
      })
      setStateMenu(true)
      setStyleText({
        // Text:{ color:' #008888'},
        underline:{width:"18%"}
      })
      SetTitleIcon("Feixar Menu")
    }else{
      setElementIconMenu0({style:{},id:"ElementIconMenustyle0"})
      setElementIconMenu1({style:{},id:"ElementIconMenustyle1"})
      setElementIconMenu2({style:{},id:"ElementIconMenustyle2"})
      setStateMenu(false)
      SetTitleIcon("Abrir Menu")
      setStyleText({
        Text:{},
        underline:{}
      })
    }
  }




  return (<>
    <div className="MenuIcon" onClick={SwitchControllMenu} >
      <div className="TitleMenu" style={StyleText.Text} >Menu
        <span className="UnderLineMenu" style={StyleText.underline} ></span>
      </div>
      <div className="IconMenu"

        onClick={SwitchControllMenu}

        title={TitleIcon}

        style={{
          width:props.width,
          height:props.height
        }}
      >
          
          <span style={ElementIconMenu0.style} id={ElementIconMenu0.id} className="ElementIconMenu"></span>
          <span style={ElementIconMenu1.style} id={ElementIconMenu1.id} className="ElementIconMenu"></span>
          <span style={ElementIconMenu2.style} id={ElementIconMenu2.id} className="ElementIconMenu"></span>
      </div>
    </div>
  </>);
}
