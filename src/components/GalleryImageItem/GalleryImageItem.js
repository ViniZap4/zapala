import React, { useState, useEffect } from 'react';

import './GalleryImageItem.css'
import './ItemDescription.css'


//import component
import CloseIcon from '../Icons/CloseIcon/CloseIcon'
import AuthorIcon from '../Icons/AuthorIcon/AuthorIcon'
import FullScreenIcon from '../Icons/FullScreen/FullScreenIcon'


//import data 
import { defaultStyle, OpenDesktop,OpenMobile, OpenImg } from './ValuesStyleAll'

export default function GalleryImageItem(props) {
  const [SwitchStateBox,setSwitchStateBox ] = useState(false)
  const [SwitchStateImg,setSwitchStateImg ] = useState(false)
  const [OpenStyle, setOpenStyle ] = useState(OpenDesktop)
  const [StyleAll, setStyleAll] = useState(defaultStyle)
  const [ContentFullICon,setContentFullIcon ] = useState(<></>)
  const [ContentInfo,setContentInfo ] = useState(<></>)
  const [GalleryImageItemImgStyle,setGalleryImageItemImgStyle ] = useState({
    backgroundImage:`url(${props.src})`
  })
  

  const contentInfoOpen = (<>
    <div>
      <h2 className="GalleryImageItemContentInfoDescription" >
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
    <ItemDescription info="Autor">
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
  const contentControlOpen = (<FullScreenIcon color="#fff" sizeLine="0.36vmin" />)


  useEffect(()=>{
    if(window.innerWidth >= window.innerHeight){
      setOpenStyle(OpenDesktop)
    }else{
      setOpenStyle(OpenMobile)
    }
  },[])
 
   
  function OpenGallery(){
    if(!SwitchStateBox){
      setSwitchStateBox(true)
      setStyleAll(OpenStyle)
      setContentInfo(contentInfoOpen)
      setContentFullIcon(contentControlOpen  )
    } 
    
  }
  function CloseGallery(){
    setGalleryImageItemImgStyle({
      backgroundImage:`url(${props.src})`,
    })
    setSwitchStateBox(false)
    setSwitchStateImg(false)
    setStyleAll(defaultStyle) 
    setContentInfo(<></>)
    setContentFullIcon(<></>)
  }

  function openImg(){
    if(!SwitchStateImg){
      setStyleAll(OpenImg) 
      setContentInfo(<></>)
      setSwitchStateImg(true)
      setGalleryImageItemImgStyle({
        backgroundImage:`url(${props.src})`,
        width:"100%",
        height:"100%",
        backgroundColor:"#000",
        backgroundSize:"contain",
        borderRadius:"0vmin"
      })
    }else{
      setStyleAll(OpenStyle)
      setContentInfo(contentInfoOpen)
      setSwitchStateImg(false)
      setGalleryImageItemImgStyle({
        backgroundImage:`url(${props.src})`,
      })
    }

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
          style={GalleryImageItemImgStyle}
        > 
          <div className="GalleryImageIteControlArea" style={StyleAll.ControlArea} >
            <span className="GalleryImageIteControlFullScreenArea" onClick={openImg} > 
              {ContentFullICon}
            </span>
            <span className="GalleryImageItemContentTitleClose" style={StyleAll.CloseIconArea}  onClick={CloseGallery}>
              <CloseIcon size={CloseIcon.size} color={StyleAll.CLoseIcon.color} shadowSize={StyleAll.CLoseIcon.shadowSize} shadowColor={StyleAll.CLoseIcon.shadowColor} />
            </span>         
          </div>
        </span>
       
      </div>
      <div className="GalleryImageItemContent" style={StyleAll.content}>
        <div className="GalleryImageItemContentTitle"style={StyleAll.title}>
          <span className="GalleryImageItemContentTitleName"><span style={StyleAll.titleIcon} className="GalleryImageItemContentTitleIcon">➤</span> 
            {props.name}
          </span>
        </div>
        <div className="GalleryImageItemContentInfoArea" style={StyleAll.infoArea}>
          {ContentInfo} 
        </div>
      </div>
    </div>
  );
} 