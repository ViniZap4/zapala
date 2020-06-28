import React, {useEffect, useState} from 'react';

import './BoxMenuDate.css'

//import content
import ContentBoxMenuDate from './ContentBoxMenuDate/ContentBoxMenuDate'

// import Context
import { useMenubarContext } from '../../Context/menuContext'

export default function BoxMenuDate(props) {
  const { StateDate } = useMenubarContext()

  const [BoxMenuDateStyle,setBoxMenuDateStyle ] = useState({})


  useEffect(()=>{
    if(StateDate)
    setBoxMenuDateStyle({
        top:"10vmin",
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
    </div>
  );
}