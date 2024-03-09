import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classes from './styles/slider.module.css'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} className={classes.item}>
        <img
          className={classes.image}
          src={require('../../images/slide3.png')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3><strong style={{fontSize: '40px'}}>Apply for your E-Visa with Ease</strong></h3>
          <p>Experience hassle-free E-Visa processing with our secure online platform.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className={classes.item}>
        <img
          className={classes.image}
          src={require('../../images/slide1.jpeg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3><strong style={{fontSize: '40px'}}>Explore Exciting Destinations</strong></h3>
          <p>Embark on your next adventure with our E-Visa services to various destinations.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className={classes.item}>
        <img
          className={classes.image}
          src={require('../../images/slide2.jpeg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3><strong style={{fontSize: '40px'}}>Secure and Convenient Processing</strong></h3>
          <p>Enjoy extra convenience and security with our streamlined E-Visa processing system.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
