import React, {useEffect, useState} from 'react';

import './BoxMenuDate.css'

//import content
import ContentBoxMenuDate from './ContentBoxMenuDate/ContentBoxMenuDate'

//import components 
import CloseIcon from '../Icons/CloseIcon/CloseIcon'

// import Context
import { useMenubarContext } from '../../Context/menuContext'

export default function BoxMenuDate(props) {
  const { StateDate, setStateDate } = useMenubarContext()

  const [BoxMenuDateStyle,setBoxMenuDateStyle ] = useState({})


  useEffect(()=>{
    if(StateDate)
    setBoxMenuDateStyle({
        top:"5.58vmax",
        opacity: 1,
        zIndex:4,
        transform: "scale(1)",
      })
      
    else{
      setBoxMenuDateStyle({})
    }
  },[StateDate])

  return (
    <div style={BoxMenuDateStyle} className="BoxMenuDate">
       <ContentBoxMenuDate />
       <span className="BoxMenuDateCloseButton" onClick={() => setStateDate(false)} >
        <CloseIcon  />
       </span>
    </div>
  );
}