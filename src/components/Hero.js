import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import banners from './Banners';
import "../css/Home.css";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  );
};

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
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