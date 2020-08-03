import React from 'react';

import './Projects.css'

// import components
import CreatePage from '../../components/CreatePage/CreatePage'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import AuthorsProjects  from '../../components/ProjectItem/AuthorsProjects/AuthorsProjects' 

// import icons
import githubIcon from '../../images/icons/github.png'
import linkedinIcon from '../../images/icons/linkedin.png'

import connectDevelopersArticlesIcon from '../../images/icons/project/connectDevelopers.png'
import magicLanguageIcon from '../../images/icons/project/magic-language.png'
// import backgrounds
import zapalaBackground from '../../images/Projects/zapala.png'
import connectDevelopersArticlesBackground from '../../images/Projects/connect-developers-articles.png'
import magicLanguageBackground from '../../images/Projects/magic-language.png'


export default function Projects(props) {
  function DefaultRepositoryGit(props){
    return(
      <AuthorsProjects 
      iconSrc={githubIcon}
      name={props.name} 
      office={props.office} 
      textLinks="Ver seu GitHub"
      href={`https://github.com/${props.gitHub}`}
    />
    )
  }
  function DefaultMe(props){
    return(
      <DefaultRepositoryGit name="Vincius Zapalá dos Santos"  gitHub="ViniZap4" office={props.office} />
    )
  }

  return (
    <CreatePage id="Projects">
      <div className="contentProjects">
      <div className="ProjectsContentTitlePage">
          Projetos Zapalá
        </div>
        <div className="ProjectsItemContent">
          <ProjectItem 
            background={zapalaBackground} href="https://zapala.vercel.app/" hrefRepository="https://github.com/ViniZap4/zapala" iconSrc={zapalaBackground} titleProject="Zapalá" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " 
          >
            <DefaultMe office="gerente do projeto, Desenvolvedor, Designer" />

          </ProjectItem>
          <ProjectItem titleProject="Magic Language" href="https://magic-laguage.vercel.app/" hrefRepository="https://github.com/ViniZap4/magic-laguage" 
            background={magicLanguageBackground} iconSrc={magicLanguageIcon} 
            description="Plataforma de aprendizado da língua inglesa desenvolvida para facilitar o entendimento do idioma. Através de lições simples e práticas que demandam apenas 15 minutos de estudo por dia para aprimorar o aprendizado." 
          >
            <DefaultMe office="gerente do projeto, Desenvolvedor" />
            <DefaultRepositoryGit  name="Brenda Aryelle"  gitHub="bresilva-bit" office="Desenvolvedora, designer, Criadora de conteúdo"  />
            <AuthorsProjects iconSrc={linkedinIcon} name="Guilherme Guedes" office="Desenvolvedor, Criador de conteúdo" textLinks="Ver perfil no Linkedin" href="https://www.linkedin.com/in/guilherme-guedes-b443a1104" />
            <DefaultRepositoryGit  name="Lucas Alves Ribeiro"  gitHub="NYAUW" office="Desenvolvedor, designer"  />           
            <DefaultRepositoryGit  name="Vitor de Deus Anselmo"  gitHub="zowa14" office="Desenvolvedor, designer"  />


          </ProjectItem>
          <ProjectItem titleProject="Connect Developers Articles" href="https://connect-developers-articles.vercel.app/" hrefRepository="https://github.com/ViniZap4/ConnectDevelopersArticles" 
            background={connectDevelopersArticlesBackground} iconSrc={connectDevelopersArticlesIcon} 
            description="Desenvolvimento de aplicações com interface bem explicativa voltada para desenvolvedores aprenderem de programação de uma forma fácil, ágil e dinâmica." 
          >
            <DefaultMe office="gerente do projeto, Desenvolvedor, Designer" />
            <DefaultRepositoryGit  name="Brenda Aryelle"  gitHub="bresilva-bit" office="Desenvolvedora, Responsável pela documentação"  />
            <DefaultRepositoryGit  name="Felipe Moresqui"  gitHub="felipemoresqui" office="Desenvolvedor, Criador de conteúdo "  />
            <DefaultRepositoryGit  name="Lucas Alves Ribeiro"  gitHub="NYAUW" office="Desenvolvedor, Criador de conteúdo "  />
            <DefaultRepositoryGit  name="Nicolas de Santana"  gitHub="NicolasNicolau" office="Desenvolvedor, Criador de conteúdo "  />

            

          </ProjectItem>
        </div>
      </div>
    </CreatePage>
  );
}