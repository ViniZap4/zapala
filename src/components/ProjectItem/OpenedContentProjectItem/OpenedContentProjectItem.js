import React from 'react';

import './OpenedContentProjectItem.css'


export function OpenedTitle(props) {
  return (
    <div className="OpenedTitle">
      <span className="OpenedTitleText">{props.children}</span>
      {props.button}
    </div>
 
  );
}


export default function OpenedContentProjectItem(props) {
  return (
    <div className="OpenedContentProjectItem">
      <div className="OpenedContentProjectItemAccess">
        <div className="ProjectItemOpenButton">
          <span className="ProjectItemOpenButtonText">Visitar {props.titleProject}</span>
        </div>
        <div className="ProjectItemOpenButton">
          <span className="ProjectItemOpenButtonText">Ver Repositório no GitHub</span>
        </div>
      </div>
      <h2 className="OpenedContentProjectItemTitleAuthors"> Stakeholders do Projetos </h2>
      <div className="OpenedContentProjectItemAuthorsArea">
        {props.authors}
      </div>
    </div>
  );
}

export function OpenedDescription(props) {
  return (
    <div className="OpenedDescription">
      <h2 className="OpenedDescriptionTitle">Descrição</h2>
      <p className="OpenedDescriptionText" >{props.text}</p>
      {/* <div className="OpenedDescriptionMoreInfo">
        <span>Data de Criação:</span><span></span>
        <span>Data de Conclusão:</span><span></span>
      </div> */}
    </div>
  );
}