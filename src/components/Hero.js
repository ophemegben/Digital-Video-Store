import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/Home.css";
import zIndex from '@mui/material/styles/zIndex';

const Hero = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/banners') 
      .then(response => response.json())
      .then(data => setBanners(data))
      .catch(error => console.error('Error fetching banners:', error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div className='slick-next'>›</div>,
    prevArrow: <div className='slick-prev'>‹</div>
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {banners.map(banner => (
          <div key={banner.id} className="slide">
            <div className="slide-overlay"></div>
            <img src={banner.image} alt={banner.title} className="slide-image" />
            <div className="slide-content">
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;