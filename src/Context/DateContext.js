import React, { createContext, useState, useContext} from 'react';

import leftPad from '../components/LeftPad/LeftPad';


const DateContext = createContext()

export default function DateProvider(props) {
  // set Strings
  var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
  var semanaCut = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
  var mes = ['Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
  var mesCut = ['Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

  const [week, setWeek] = useState("none")
  const [weekCut, setWeekCut] = useState("none")
  const [mounthPlus, setMonthPlus] = useState("none")
  const [mounthPlusCut, setMonthPlusCut] = useState("none")
  const [mounth, setMonth] = useState(0)
  const [year, setYear] = useState(0)
  const [date, setDate] = useState (0)
  const [hours, setHours] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)

  // update dates
 
  setTimeout(() => tick(), 1000)

  const d = new Date() 

  function tick(){

    setWeek(        semana[d.getDay()])
    setWeekCut(     semanaCut[d.getDay()])
    setMonthPlus(   mes[d.getMonth()-1])
    setMonthPlusCut(mesCut[d.getMonth()-1])
    setMonth(       leftPad(d.getMonth()+1,2))
    setYear(        leftPad(  d.getFullYear(), 4))
    setDate(        leftPad( d.getDate(), 2))
    setHours(       leftPad( d.getHours(), 2))
    setMin(         leftPad( d.getMinutes(), 2))
    setSec(         leftPad( d.getSeconds(), 2))
}


  return (
    <DateContext.Provider
      value={{
        week,
        weekCut,
        mounth,
        mounthPlus,
        mounthPlusCut,
        year,
        date,
        hours,
        min,
        sec,
      }}
    >
      {props.children}
    </DateContext.Provider>
  );
}

export function UseDate(){
  const context = useContext(DateContext)
  if (!context) throw console.error("UseDate must e used within a DateProvider")
  const {
    week,
    weekCut,
    mounth,
    mounthPlus,
    mounthPlusCut,
    year,
    date,
    hours,
    min,
    sec,
  } = context 
  return {
    week,
    weekCut,
    mounth,
    mounthPlus,
    mounthPlusCut,
    year,
    date,
    hours,
    min,
    sec,
  } 
}