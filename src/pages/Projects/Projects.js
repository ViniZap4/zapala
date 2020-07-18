import React from 'react';

import './Projects.css'

// import components
import CreatePage from '../../components/CreatePage/CreatePage'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

export default function Projects(props) {
  return (
    <CreatePage id="Projects">
      <div className="contentProjects">
      <div className="ProjectsContentTitlePage">
          Projetos Zapalá
        </div>
        <div className="ProjectsItemContent">
          <ProjectItem ></ProjectItem>
        </div>
      </div>
    </CreatePage>
  );
}