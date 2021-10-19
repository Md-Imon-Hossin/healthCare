import React from 'react';
import { Carousel } from 'react-bootstrap';
// import css 
import './Banner.css'
// Slider Image Import 
import banner1 from '../../../images/banners/banner1.jpg'
import banner2 from '../../../images/banners/banner2.jpg'
import banner3 from '../../../images/banners/banner3.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className='text-dark carousel-caption'>
      <h3>We Give Solution To Your Pain</h3>
      <p>Dr. Robert Joe is prepared to suggest remedial and rehabilitative activities, and also to give wholesome, dietary and way of life directing. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption className='text-dark carousel-caption'>
    <h3>Professional Team Of Experts</h3>
      <p>Dr. Robert Joe is prepared to suggest remedial and rehabilitative activities, and also to give wholesome, dietary and way of life directing. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption className='text-dark carousel-caption'>
    <h3>Physio Therapy Of Services From Professional</h3>
    <p>Dr. Robert Joe is prepared to suggest remedial and rehabilitative activities, and also to give wholesome, dietary and way of life directing. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;