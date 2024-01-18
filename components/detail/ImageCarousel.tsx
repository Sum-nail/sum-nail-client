'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SetStateAction, useState } from 'react';
import { ImageIcon } from '@/public/icons';
import { ShopDetail } from '@/api/nail-shops/types';

interface ImageProps {
  detailImages: string[];
}

function ImageCarousel(props: ImageProps) {
  //api 연동하면서  currentIndex / image.length로 map 돌려서 숫자로 표시할 예정입니다!

  const { detailImages } = props;
  console.log('사진사진사진', detailImages);

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
    appendDots: (dots: any) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '2.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
  };
  return <Slider {...settings}>{/* <img src={detailImages} alt="detailImages" /> */}</Slider>;
}

export default ImageCarousel;
