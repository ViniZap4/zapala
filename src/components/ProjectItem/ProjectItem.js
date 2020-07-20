import React, { useState } from 'react';


//import styles
import './ProjectItem.css'
import {
  openedProjectItemStyle,
  openedProjectItemImgContentStyle
} from './StylesProjectItem'

//import components
import LinkProjectItem from './LinkProjectItem/LinkProjectItem'
import OpenedContentProjectItem, {OpenedTitle, OpenedDescription} from './OpenedContentProjectItem/OpenedContentProjectItem'

//import Icons
import CloseIcon from '../Icons/CloseIcon/CloseIcon'
import gitHubIcon from '../../images/icons/github.png'


export default function ProjectItem(props) {
  
  const defaultProjectItemImgStyle = {
    backgroundImage:`url(${props.background})`
  }
  const openedProjectItemImgStyle = {
    backgroundImage:`url(${props.background})`
  } 

  const AccessLinkItemStyle = { marginLeft:'1.8vw' }
  const defaultProjectItemContent = (<>
    <div className="defaultProjectItemContent">
      <div className="defaultProjectItemContentTitle">
        <span className="defaultProjectItemContentTitleText">{props.titleProject}</span>
      </div>
      <div className="defaultProjectItemContentAccess">
        <LinkProjectItem iconSrc={props.iconSrc} style={AccessLinkItemStyle} > Visitar {props.titleProject}</LinkProjectItem>
      </div>
      <div className="defaultProjectItemContentMore">
        <div className="defaultProjectItemContentRepository">
        <LinkProjectItem iconSrc={gitHubIcon} style={AccessLinkItemStyle} >Ver Repositório</LinkProjectItem>
        </div>
        <div className="ProjectItemOpenButtonArea" onClick={openProjectItem} style={{marginRight:'1.8vmin'}}>
          <div className="ProjectItemOpenButton">
            <span className="ProjectItemOpenButtonText">Ver Mais</span>
          </div>
        </div>
      </div>
    </div>
  </>)
  const ButtonCloseAreaContent = (<>
    <div className="ProjectItemOpenButtonCloseArea" onClick={closeProjectItem}>
      <CloseIcon color="#fff" />
    </div>
  </>)

  
  //styles
  const [ProjectItemStyle, setProjectItemStyle] = useState({})
  const [ProjectItemImgContentStyle, setProjectItemImgContentStyle ] = useState({})
  const [ProjectItemImgStyle, setProjectItemImgStyle] = useState(defaultProjectItemImgStyle)
  //content
  const [TittleContent,setTittleContent ] = useState(<></>)
  const [ProjectItemContent,setProjectItemContent ] = useState(defaultProjectItemContent)
  const [DescriptionContent,setDescriptionContent ] = useState(<></>)

  function openProjectItem(){
    //styles
    setProjectItemStyle(openedProjectItemStyle)
    setProjectItemImgContentStyle(openedProjectItemImgContentStyle)
    //content
    setTittleContent(<>
      <OpenedTitle> {props.titleProject} </OpenedTitle>
      {ButtonCloseAreaContent}
    </>)
    setProjectItemContent(<OpenedContentProjectItem titleProject={props.titleProject} authors={props.children} />)
    setDescriptionContent(<OpenedDescription text={props.description}/>)
  }
  function closeProjectItem(){
      //styles
      setProjectItemStyle({animation:'initWaitProject 0.45s linear',})
      setProjectItemImgContentStyle({})
      //content
      setTittleContent(<></>)
      setProjectItemContent(defaultProjectItemContent)
      setDescriptionContent(<></>)  
  }

  return (
    <div className="ProjectItem" style={ProjectItemStyle}> 
      {TittleContent}
      <div className="ProjectItemContentInfo">
        <div className="ProjectItemImgContent" style={ProjectItemImgContentStyle}>
          <span
            className="ProjectItemImg"
            style={ProjectItemImgStyle}
          ></span>
        </div>
        {DescriptionContent}
      </div>
      {ProjectItemContent}
    </div>
  );
}
