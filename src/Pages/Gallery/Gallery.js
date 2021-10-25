import React from 'react';
import './Gallery.css'
import photo1 from '../../images/gallery/g1.jpg'
import photo2 from '../../images/gallery/g2.jpg'
import photo3 from '../../images/gallery/g3.jpg'
import photo4 from '../../images/gallery/g4.jpg'
import photo5 from '../../images/gallery/g5.jpg'
import photo6 from '../../images/gallery/g6.jpg'
import photo7 from '../../images/gallery/g7.jpg'
import photo8 from '../../images/gallery/g8.jpg'
import photo9 from '../../images/gallery/g9.jpg'

const Gallery = () => {
    return (
        <div>
            <h1 className = "text-primary mt-4">Welcome to our Photo Gallery</h1>
           <div className="row gallery">
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo1} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo2} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo3} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo4} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo5} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo6} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo7} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo8} alt="" />
                </div>
                <div className="col-lg-4 col-12 my-4">
                    <img className = "img-fluid" src={photo9} alt="" />
                </div>
           </div>
        </div>
    );
};

export default Gallery;