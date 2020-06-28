import React, { useState, useEffect } from 'react';

import './Date.css'


// import Contexts
import { useMenubarContext } from '../../Context/menuContext'
import { UseDate } from '../../Context/DateContext'


export default function Date(props) {
  const { weekCut, date, mounthPlusCut , hours, min } = UseDate()
  const { StateDate,setStateDate  } = useMenubarContext()
  const [StyleAll, setStyleAll] = useState({
    DateMenuTopText:{ },
    underLineDate:{}
  })

  useEffect(()=>{
    if(StateDate){
      setStyleAll({
        underLineDate:{width:"18%"}
      })
      
    }else{
      setStyleAll({
        underLineDate:{}
      })
    }
  },[StateDate])

  function openBoxMenuDate(){
    if(!StateDate){
      setStateDate(true)  
    }else{
      setStateDate(false)
    }
  }

  return (<>
    <span className="DateMenuTop"
      onClick={openBoxMenuDate}
    >
      <span className="DateMenuTopText" style={StyleAll.DateMenuTopText}>
        {weekCut}, {date} de {mounthPlusCut} {hours}:{min}
      </span>
      <span className="UnderLineDate" style={StyleAll.underLineDate}></span>

    </span>
  </>);
}

