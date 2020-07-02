import React from 'react';

import './Gallery.css'

//import components 
import CreatePage from '../../components/CreatePage/CreatePage'
import GalleryImageItem from '../../components/GalleryImageItem/GalleryImageItem'

export default function Gallery(props) {
  return (
    <CreatePage id="GalleryPage">
      <div className="GalleryContentPage">
        <div className="GalleryContentTitlePage">
          Galeria Zapalá
        </div>
        <div className="GalleryItemContent">
          <GalleryImageItem />
          <GalleryImageItem />
          <GalleryImageItem />
          <GalleryImageItem />
          <GalleryImageItem />
          <GalleryImageItem />
          <GalleryImageItem />

        </div>
      </div>
    </CreatePage>
  );
} 