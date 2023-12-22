'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SetStateAction, useState } from 'react';
import { ImageIcon } from '@/public/icons';

function ImageCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    className: 'detail-slider',
  };
  return (
    <Slider {...settings}>
      <ImageIcon />
      <ImageIcon />
      <ImageIcon />
    </Slider>
  );
}

export default ImageCarousel;
