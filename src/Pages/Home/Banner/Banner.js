import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner/banner1.jpeg'
import banner2 from '../../../images/banner/banner2.jpeg'
import banner3 from '../../../images/banner/banner3.jpeg'

const Banner = () => {
    return (
        <div className = "banner">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Dr. Selena Hossain</h3>
      <p>Surgery Specialist</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Dr. Yousuf Ahmed</h3>
      <p>Medecine Specialist</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
    src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Dr. Rexona Butt</h3>
      <p>Guyne Specialist</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;