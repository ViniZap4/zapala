import React, { useState, useEffect } from 'react';

import './GalleryImageItem.css'
import './ItemDescription.css'


//import component
import CloseIcon from '../Icons/CloseIcon/CloseIcon'
import AuthorIcon from '../Icons/AuthorIcon/AuthorIcon'


//import data 
import { defaultStyle, OpenDesktop,OpenMobile } from './ValuesStyleAll'

export default function GalleryImageItem(props) {
  const [SwitchStateBox,setSwitchStateBox ] = useState(false)
  const [OpenStyle, setOpenStyle ] = useState()
  const [StyleAll, setStyleAll] = useState(defaultStyle)
  const [ContentInfo,setContentInfo ] = useState(<></>)
  

  const contentInfoOpen = (<>
    <div>
      <h2 className="GalleryImageItemContentInfoDescription" style={StyleAll.titleText} >
        Descricão: 
      </h2>
      <span className="GalleryImageItemContentInfoDescriptionText">
        {props.children}    
      </span>
    </div>
    <ItemDescription info="Criação">
      {props.creation}
    </ItemDescription>
    <ItemDescription info="Envio">
      {props.upload}
    </ItemDescription>
    <ItemDescription info="Resolusão">
      {props.resolution}
    </ItemDescription>  
    {/* <ItemDescription info="temanho">
      {props.size}
    </ItemDescription> */}
    <ItemDescription info="Author">
      {props.author}
    </ItemDescription>
    {/* <ItemDescription info={props.licence}>
      {props.licenceText}
    </ItemDescription> */}
    <a href={props.srcAuthor} rel="noopener noreferrer" target="_black" className="GalleryImageItemContentInfoAuthor">
      <div className="GalleryImageItemContentInfoNameAuthor">
        <span className="GalleryImageItemContentInfoNameText"><AuthorIcon size="3.6vmin" /> {props.author} </span>
        <span className="GalleryImageItemContentInfoNameUnderline"></span>
      </div>
    </a>
  </>)


  useEffect(()=>{
    if(window.innerWidth >= window.innerHeight){
      setOpenStyle(OpenDesktop)
    }else{
      setOpenStyle(OpenMobile)
    }
  },[])
 
 

  useEffect(()=>{
    if(SwitchStateBox){
      setStyleAll(OpenStyle)
      setContentInfo(contentInfoOpen)
    }else{
      setStyleAll(defaultStyle) 
      setContentInfo(<></>)
    }
  },[SwitchStateBox])

  
  function OpenGallery(){
    if(!SwitchStateBox) setSwitchStateBox(true)
    
  }
  function CloseGallery(){
    setSwitchStateBox(false)
  }


  function ItemDescription(props) {
    return (    
      <span className="ItemDescription" >
        <span className="ItemDescriptionType" >
          {props.info}:
        </span>
        <span  className="ItemDescriptionValue"  >
          {props.children}
        </span>
      </span>
    );
  }

  return (
    <div className="GalleryImageItem" onClick={OpenGallery} style={StyleAll.master}>
      <div className="GalleryImageItemArea" style={StyleAll.area}>
        <span
          className="GalleryImageItemImg"
          style={{backgroundImage:`url(${props.src})`}}
        ></span>
      </div>
      <div className="GalleryImageItemContent" style={StyleAll.content}>
        <div className="GalleryImageItemContentTitle"style={StyleAll.title}>
          <span className="GalleryImageItemContentTitleName"><span style={StyleAll.titleIcon} className="GalleryImageItemContentTitleIcon">➤</span> 
            {props.name}
          </span>
          <span className="GalleryImageItemContentTitleButtomArea">
            <span className="GalleryImageItemContentTitleCloseWhite"  onClick={CloseGallery}>
              <CloseIcon color={StyleAll.CLoseIcon.color} shadowSize={StyleAll.CLoseIcon.shadowSize} shadowColor={StyleAll.CLoseIcon.shadowColor} />
            </span>
        
          </span>
        </div>
        <div className="GalleryImageItemContentInfoArea">
          {ContentInfo} 
        </div>
      </div>
    </div>
  );
} 