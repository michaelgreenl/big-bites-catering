'use client';

import './ActiveSlider.scss';
import '@/components/Gallery/Slick/Slick.scss';
import Slider from 'react-slick';
import Button from '@/components/Global/Button/Button';
import Image from 'next/legacy/image';
import { CloseSvg } from '@/components/svgs/CloseSvg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../Slick/Slick';

const ActiveSlider = ({ sliderImages, setActiveSlide, activeSlide }) => {
  const activeSliderSettings = {
    className: 'activePhotoSlider',
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: activeSlide,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='activeSliderWrapper'>
      <Button
        className='closeButton'
        onClick={() => setActiveSlide(null)}
        iconAfter={<CloseSvg className='closeButtonIcon' />}
      />
      <Slider {...activeSliderSettings}>
        {sliderImages.map((image) => (
          <div
            className={`activeSlideWrapper ${
              image.height > image.width ? 'activeSlideWrapper--portrait' : 'activeSlideWrapper--landscape'
            }`}
            key={image.src}
          >
            <Image
              src={image.src}
              alt='Downtown Detroit Catering Gallery Image'
              layout='responsive'
              height={image.height}
              width={image.width}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ActiveSlider;
