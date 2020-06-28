import React, { useState } from 'react';

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

  function openBoxMenuDate(){
    if(!StateDate){
      setStateDate(true)
      setStyleAll({
        DateMenuTopText:{ color:' #008888', textShadow: '0vmin 0vmin 1.8vmin #008888',},
        underLineDate:{width:"18%"}
      })
      
    }else{
      setStateDate(false)
      setStyleAll({
        DateMenuTopText:{},
        underLineDate:{}
      })
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

