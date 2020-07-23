import React from 'react';

import './AuthorsProjects.css'

//import Components
import LinkProjectItem from '../LinkProjectItem/LinkProjectItem'
import AuthorIcon from '../../Icons/AuthorIcon/AuthorIcon'

export default  function AuthorsProjects(props) {
  return (
    <div className="AuthorsProjects">
       <span className="AuthorsProjectsName">
       <AuthorIcon size="3.15vmin" />
         <span  className="AuthorsProjectsText"> {props.name} </span>
      </span>
      <div className="AuthorsProjectsContent">
      <span className="AuthorsProjectsContentText">Cargo:
       <span className="AuthorsProjectsContentTextContent"> {props.office}</span>
      </span>

        <LinkProjectItem href={props.href} iconSrc={props.iconSrc} >
         <span className="AuthorsProjectsContentTextLink"> {props.textLinks} </span>
        </LinkProjectItem>
      </div>


    </div>
  );
}
