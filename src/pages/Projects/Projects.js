import React from 'react';

import './Projects.css'

// import components
import CreatePage from '../../components/CreatePage/CreatePage'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import AuthorsProjects  from '../../components/ProjectItem/AuthorsProjects/AuthorsProjects' 

// import icons
import githubIcon from '../../images/icons/github.png'
// import backgrounds
import zapalaBackground from '../../images/Projects/zapala.png'


export default function Projects(props) {
  return (
    <CreatePage id="Projects">
      <div className="contentProjects">
      <div className="ProjectsContentTitlePage">
          Projetos Zapalá
        </div>
        <div className="ProjectsItemContent">
          <ProjectItem background={zapalaBackground} iconSrc={zapalaBackground} titleProject="Zapalá" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " >
            <AuthorsProjects 
              iconSrc={githubIcon}
              name="Vincius Zapalá" 
              office="gerente do projeto, Desenvolvedor, Designer" 
              textLinks="Ver repósitorios"
            />
          </ProjectItem>
          <ProjectItem titleProject="Magic Language" ></ProjectItem>
          <ProjectItem titleProject="Connect Developers Articles"></ProjectItem>

        </div>
      </div>
    </CreatePage>
  );
}