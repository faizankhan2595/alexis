import React from 'react'
import Footer from '../Footer';
import Template from '../Template';
import WSPGallery from '../WSPGallery';
import BackToTopButton from '../BackToTopButton';
import './Gallery.css';

import img1 from '../../assests/Gallery Image 1.jpg'
import img2 from '../../assests/Gallery Image 2.jpg'
import img3 from '../../assests/Gallery Image 3.jpg'
import img4 from '../../assests/Gallery Image 4.jpg'
import img5 from '../../assests/Gallery Image 5.jpg'
import img6 from '../../assests/Gallery Image 6.jpg'
import img7 from '../../assests/Gallery Image 7.jpg'
import img8 from '../../assests/Gallery Image 8.jpg'
import img9 from '../../assests/Gallery Image 9.jpg'

const galleryImages = [
    {
      img: img1
    },
    {
      img: img2
    },
    {
      img: img3
    },
    {
      img: img4
    },
    {
      img: img5
    },
    {
      img: img6
    },
    {
      img: img7
    },
    {
      img: img8
    },
    {
      img: img9
    },
  ]

const Gallery = () => {
  return (
    <div className="gallery">
        <Template name = "Our Gallery"/>
        <div className="gallerymain">
            <div className="images">
            <WSPGallery galleryImages={galleryImages}/>
            </div>
        </div>
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default Gallery