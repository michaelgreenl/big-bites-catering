'use client';

import './PhotoSlider.scss';
import { useEffect, useState } from 'react';
import '@/components/Gallery/Slick/Slick.scss';
import Slider from 'react-slick';
import GalleryImage from '../GalleryImage/GalleryImage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDisableScroll } from '@/hooks/useDisableScroll';
import { NextArrow, PrevArrow } from '@/components/Gallery/Slick/Slick';
import ActiveSlider from '@/components/Gallery/ActiveSlider/ActiveSlider';

const PhotoSlider = () => {
  const [activeSliderImages, setActiveSliderImages] = useState([]);
  const sliderImages = [
    [
      { src: '/assets/images/gallery/IMG_3.webp', height: 200, width: 300, buttonWidth: '98%', slide: 0 },
      { src: '/assets/images/gallery/IMG_2.webp', height: 200, width: 300, buttonWidth: '98%', slide: 1 },
    ],
    { src: '/assets/images/gallery/IMG_1.webp', height: 200, width: 150, buttonWidth: '99%', slide: 2 },
    [
      { src: '/assets/images/gallery/IMG_3.webp', height: 200, width: 300, buttonWidth: '98%', slide: 3 },
      { src: '/assets/images/gallery/IMG_2.webp', height: 200, width: 300, buttonWidth: '98%', slide: 4 },
    ],
    { src: '/assets/images/gallery/IMG_1.webp', height: 200, width: 150, buttonWidth: '99%', slide: 5 },
    [
      { src: '/assets/images/gallery/IMG_3.webp', height: 200, width: 300, buttonWidth: '98%', slide: 6 },
      { src: '/assets/images/gallery/IMG_2.webp', height: 200, width: 300, buttonWidth: '98%', slide: 7 },
    ],
    { src: '/assets/images/gallery/IMG_1.webp', height: 200, width: 150, buttonWidth: '99%', slide: 8 },
    [
      { src: '/assets/images/gallery/IMG_3.webp', height: 200, width: 300, buttonWidth: '98%', slide: 9 },
      { src: '/assets/images/gallery/IMG_2.webp', height: 200, width: 300, buttonWidth: '98%', slide: 10 },
    ],
  ];

  useEffect(() => {
    let tempImages = [];
    for (const image of sliderImages) {
      if (image[0] !== undefined) {
        tempImages.push({ src: image[0].src, height: image[0].height, width: image[0].width });
        tempImages.push({ src: image[1].src, height: image[1].height, width: image[1].width });
      } else {
        tempImages.push({ src: image.src, height: image.height, width: image.width });
      }
    }
    setActiveSliderImages(tempImages);
  }, []);

  const sliderSettings = {
    className: 'photoSlider',
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [isActive, setIsActive] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [disableScroll, enableScroll] = useDisableScroll();

  function setActiveSlider(slide) {
    if (slide !== null) {
      disableScroll();
      setIsActive(true);
    } else {
      setIsActive(false);
      enableScroll();
    }
    setActiveSlide(slide);
  }

  return (
    <>
      <Slider {...sliderSettings}>
        {sliderImages.map((image) => (
          <div className={'slideWrapper'} key={image[0] === undefined ? image.src : image[0].src}>
            {image[0] === undefined ? (
              <div style={{ width: image.buttonWidth }}>
                <GalleryImage
                  imageSrc={image.src}
                  imageHeight={image.height}
                  imageWidth={image.width}
                  buttonWidth={image.buttonWidth}
                  setActiveSlide={setActiveSlider}
                  slide={image.slide}
                />
              </div>
            ) : (
              <div className={'slideWrapper slideWrapper--stacked'} style={{ width: image[0].buttonWidth }}>
                <GalleryImage
                  imageSrc={image[0].src}
                  imageHeight={image[0].height}
                  imageWidth={image[0].width}
                  buttonWidth={image[0].buttonWidth}
                  setActiveSlide={setActiveSlider}
                  slide={image[0].slide}
                />
                <GalleryImage
                  imageSrc={image[1].src}
                  imageHeight={image[1].height}
                  imageWidth={image[1].width}
                  buttonWidth={image[1].buttonWidth}
                  setActiveSlide={setActiveSlider}
                  slide={image[1].slide}
                />
              </div>
            )}
          </div>
        ))}
      </Slider>
      {isActive && (
        <ActiveSlider
          sliderImages={activeSliderImages}
          setActiveSlide={setActiveSlider}
          activeSlide={activeSlide}
          setIsActive={setIsActive}
        />
      )}
    </>
  );
};

export default PhotoSlider;
