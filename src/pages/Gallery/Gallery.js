import React from 'react';

import './Gallery.css'

//import components 
import CreatePage from '../../components/CreatePage/CreatePage'
import GalleryImageItem from '../../components/GalleryImageItem/GalleryImageItem'

//import images
import ZapalaLogoImg from '../../images/zapala/zapala.png'

export default function Gallery(props) {
  return (
    <CreatePage id="GalleryPage">
      <div className="GalleryContentPage">
        <div className="GalleryContentTitlePage">
          Galeria Zapalá
        </div>
        <div className="GalleryItemContent">
          <GalleryImageItem 
            src={ZapalaLogoImg}
            creation="Junho de 2020"
            upload="1 de julho de 2020"
            resolution="1280 x 1280"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >
            Arte abstrada, ilustrativa, Usada como logo de Zapalá, representando a dúvuda e a sabedoria, inspirada no Triskle e Olho de Hórus, mas tendo elegância, complexidade, e ao mesmo tempo sendo simples e moderna.
          </GalleryImageItem>
 

        </div>
      </div>
    </CreatePage>
  );
} 