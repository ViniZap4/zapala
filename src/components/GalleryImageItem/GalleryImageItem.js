import React, { useState, useEffect } from 'react';

import './GalleryImageItem.css'
import './ItemDescription.css'


//import component
import CloseIcon from '../Icons/CloseIcon/CloseIcon'
import AuthorIcon from '../Icons/AuthorIcon/AuthorIcon'


//import data 
import { UseDate } from '../../Context/DateContext'
import { defaultStyle, OpenDesktop,OpenMobile } from './ValuesStyleAll'

export default function GalleryImageItem(props) {
  const { sec } = UseDate()
  const [SwitchStateBox,setSwitchStateBox ] = useState(false)
  const [OpenStyle, setOpenStyle ] = useState()
  const [StyleAll, setStyleAll] = useState(defaultStyle)
  

  useEffect(()=>{
    if(window.innerWidth >= window.innerHeight){
      setOpenStyle(OpenDesktop)
    }else{
      setOpenStyle(OpenMobile)
    }
  },[sec])
 
 

  useEffect(()=>{
    if(SwitchStateBox){
      setStyleAll(OpenStyle)
    }else{
      setStyleAll(defaultStyle) 
    }
  },[SwitchStateBox, sec])

  
  function OpenGallery(){
    if(!SwitchStateBox) setSwitchStateBox(true)
  }
  function CloseGallery(){
    setSwitchStateBox(false)
  }


  function ItemDescription(props) {
    return (    
      <li className="ItemDescription" >
        <span className="ItemDescriptionType" style={StyleAll.sizeFontMin} >
          {props.info}:
        </span>
        <span  className="ItemDescriptionValue" style={StyleAll.sizeFontMin} >
          {props.children}
        </span>
      </li>
    );
  }

  return (
    <div className="GalleryImageItem" onClick={OpenGallery} style={StyleAll.master}>
      <div className="GalleryImageItemArea" style={StyleAll.area}>
        <span
          className="GalleryImageItemImg"
          style={StyleAll.img}
        ></span>
      </div>
      <div className="GalleryImageItemContent" style={StyleAll.content}>
        <div className="GalleryImageItemContentTitle"style={StyleAll.title}>
          <span className="GalleryImageItemContentTitleName"><span style={StyleAll.titleIcon} className="GalleryImageItemContentTitleIcon">➤</span> 
            Zapalá
          </span>
          <span className="GalleryImageItemContentTitleButtomArea">
            <span className="GalleryImageItemContentTitleCloseWhite"  onClick={CloseGallery}>
              <CloseIcon  color="#fff" />
            </span>
            <span className="GalleryImageItemContentTitleClose" style={StyleAll.close}  onClick={CloseGallery}>
              <CloseIcon   />
            </span>
          </span>
        </div>
        <div className="GalleryImageItemContentInfoArea"  style={StyleAll.underline}>
          <div className="GalleryImageItemContentDescription" style={StyleAll.info}>     
            <span className="ItemDescriptionType" style={StyleAll.sizeFont} >
              Descrição:
            </span>
              Arte abstrada, ilustrativa, Usada como logo de Zapalá, representando a dúvuda e a sabedoria, inspirada no Triskle e Olho de Hórus, mas tendo elegância, complexidade, e ao mesmo tempo sendo simples e moderna.
          </div>
          <div className="GalleryImageItemContentAutor" style={StyleAll.sizeFont}>
            <ul className="GalleryImageItemContentDescriptionArea">              
              <ItemDescription info="Criação">
                2020
              </ItemDescription>
              <ItemDescription info="Envio">
                1 de Julho de 2020
              </ItemDescription>
              <ItemDescription info="Resolusão">
                1280 x 1280
              </ItemDescription>
              <ItemDescription info="Direito Moral">
                Vinicius Zapalá dos Santos
              </ItemDescription>
              <ItemDescription info="Direito Patrimonial">
                Vinicius Zapalá dos Santos
              </ItemDescription>
              <ItemDescription info="Licença:">
                Restrito de uso apenas a Vinicius Zapalá dos Santos.
              </ItemDescription>
            </ul>
            <span className="GalleryImageItemContentAutorTilte" style={StyleAll.sizeFont}>
              <span className="GalleryImageItemContentAutorTilteText" style={StyleAll.sizeFont}> 
                <AuthorIcon size={StyleAll.sizeAuthorIcon}  />
                Vinicius Zapalá dos Santos
              </span>
              <span className="GalleryImageItemContentAutorTilteUnderline" style={StyleAll.underline}></span>
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}  