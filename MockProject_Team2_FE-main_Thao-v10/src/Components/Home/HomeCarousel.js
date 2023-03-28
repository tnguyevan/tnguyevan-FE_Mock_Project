import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function HomeCarousel(props) {
    return (
        <div>
              <Carousel fade id='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/84990w9chfNPV.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-danger display-1 animate__animated animate__bounceInLeft'>Clothes for your best moments</h3>
         <p className='text-danger h3 animate__animated animate__bounceInRight animate__delay-1s'>Make people fall in love with your clothes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="d-block w-100" 
          src="/images/84990F5y57DsP.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-white display-1 animate__animated animate__bounceInLeft'>New Fashion Style</h3>
          <p className='text-white h3 animate__animated animate__bounceInRight animate__delay-1s'>New Clothes, New Passion</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/84990yNL7ADjD.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-white display-1 animate__animated animate__bounceInLeft'>Cool clothes are your body foundation</h3>
         <p className='text-white h3 animate__animated animate__bounceInRight animate__delay-1s'>Each day is a page in your fashion story</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default HomeCarousel;