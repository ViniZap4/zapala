import React from 'react';

import './Gallery.css'

//import components 
import CreatePage from '../../components/CreatePage/CreatePage'
import GalleryImageItem from '../../components/GalleryImageItem/GalleryImageItem'

//import images
import ZapalaLogoImg from '../../images/zapala/zapala.png'
import doubtTreeImg from '../../images/zapala/arvore-da-duvida.jpeg'
import zapalaWordImg from '../../images/zapala/zapalaWord.jpeg'
import theMasterImg from '../../images/zapala/the-master.jpeg'
import cityImg from '../../images/zapala/city.jpg'
import dodecaedroRegularImg from '../../images/zapala/dodecaedro-regular.jpg'
import dimensionImg from '../../images/zapala/dimension.jpeg'
import afterDeadImg from '../../images/zapala/apos-a-morte.jpeg'
import lionImg from '../../images/zapala/lion.jpg'
import leadershipImg from '../../images/zapala/リーダーシップ.jpg'

export default function Gallery(props) {
  const ler = "Site em desenvolvimento aguarde para poder ler isso."
  return (
    <CreatePage id="GalleryPage">
      <div className="GalleryContentPage">
        <div className="GalleryContentTitlePage">
          Galeria Zapalá
        </div>
        <div className="GalleryItemContent">
          
          
          <GalleryImageItem
            name="σοφία"
            src={ZapalaLogoImg}
            creation="Junho de 2020"
            upload="1 de julho de 2020"
            resolution="1280 x 1280"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >{ler}
          </GalleryImageItem>
          <GalleryImageItem 
            name="リーダーシップ"
            src={leadershipImg}
            creation="2017"
            upload="4 de julho de 2020"
            resolution="1280 x 1159"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >
            {ler}
          </GalleryImageItem>
          <GalleryImageItem 
            name="Árvore da dúvida"
            src={doubtTreeImg}
            creation="2017"
            upload="4 de julho de 2020"
            resolution="960 x 1280"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >
            {ler}
          </GalleryImageItem>
          <GalleryImageItem 
            name="Dimenção"
            src={dimensionImg}
            creation="2017"
            upload="4 de julho de 2020"
            resolution="1123 x 1064"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >
            {ler}
          </GalleryImageItem>
          <GalleryImageItem 
            name="Lion"
            src={lionImg}
            creation="2020"
            upload="4 de julho de 2020"
            resolution="1280 x 737"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >
            {ler}
          </GalleryImageItem>
          <GalleryImageItem 
            name="Zapalá"
            src={zapalaWordImg}
            creation="Junho de 2020"
            upload="4 de julho de 2020"
            resolution="1280 x 652"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >
            {ler}
          </GalleryImageItem>
          <GalleryImageItem 
            name="Dodecaedro"
            src={dodecaedroRegularImg}
            creation="2020"
            upload="4 de julho de 2020"
            resolution="1084 x 1280"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >
            {ler}
          </GalleryImageItem>
          <GalleryImageItem 
            name="The master"
            src={theMasterImg}
            creation="2020"
            upload="4 de julho de 2020"
            resolution="1042 x 1280"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >
            {ler}
          </GalleryImageItem>
          <GalleryImageItem 
            name="Após a morte"
            src={afterDeadImg}
            creation="2020"
            upload="4 de julho de 2020"
            resolution="1280 x 943"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >
            {ler}
          </GalleryImageItem>
          <GalleryImageItem 
            name="urbe"
            src={cityImg}
            creation="2019"
            upload="4 de julho de 2020"
            resolution="918 x 526"
            author="Vinicius Zapalá dos Santos"
            srcAuthor="https://vinicius-zapala.herokuapp.com/"
          >
            {ler}
          </GalleryImageItem>
 

        </div>
      </div>
    </CreatePage>
  );
} 