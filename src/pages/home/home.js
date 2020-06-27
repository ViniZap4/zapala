import React from 'react'


import './Home.css'

import img from '../../images/zapala/zapala.png'

//import components 
import CreatePage from '../../components/CreatePage/CreatePage'

export default function Home(){
  return(<>
    <CreatePage id="Home">
      <div className="HomeContent">
        <span
          className="Inlustation"
          style={{backgroundImage:`url(${img})`}}
          title="Zapalá"
        >Zapalá</span>
      </div>
    </CreatePage>
  </>)
}