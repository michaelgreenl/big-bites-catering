'use client';

import styles from './photoSlider.module.scss';
import './PhotoSlider.scss';
import Slider from 'react-slick';
import GalleryImage from '../../Gallery/GalleryImage/GalleryImage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowSvg } from '../../svgs/ArrowSvg';

const PhotoSlider = () => {
  const sliderImages = [
    { src: '/assets/images/gallery/IMG_1.webp', height: 200, width: 150, buttonWidth: '99%' },
    [
      { src: '/assets/images/gallery/IMG_3.webp', height: 200, width: 300, buttonWidth: '98%' },
      { src: '/assets/images/gallery/IMG_2.webp', height: 200, width: 300, buttonWidth: '98%' },
    ],
    { src: '/assets/images/gallery/IMG_1.webp', height: 200, width: 150, buttonWidth: '99%' },
    [
      { src: '/assets/images/gallery/IMG_3.webp', height: 200, width: 300, buttonWidth: '98%' },
      { src: '/assets/images/gallery/IMG_2.webp', height: 200, width: 300, buttonWidth: '98%' },
    ],
    { src: '/assets/images/gallery/IMG_1.webp', height: 200, width: 150, buttonWidth: '99%' },
    [
      { src: '/assets/images/gallery/IMG_3.webp', height: 200, width: 300, buttonWidth: '98%' },
      { src: '/assets/images/gallery/IMG_2.webp', height: 200, width: 300, buttonWidth: '98%' },
    ],
    { src: '/assets/images/gallery/IMG_1.webp', height: 200, width: 150, buttonWidth: '99%' },
    [
      { src: '/assets/images/gallery/IMG_3.webp', height: 200, width: 300, buttonWidth: '98%' },
      { src: '/assets/images/gallery/IMG_2.webp', height: 200, width: 300, buttonWidth: '98%' },
    ],
  ];
  // const sliderImages = [
  //   { src: '/assets/images/gallery/IMG_1.webp', height: 200, width: 150, buttonWidth: '99%' },
  //   [
  //     { src: '/assets/images/gallery/IMG_3.webp', height: 200, width: 300, buttonWidth: '98%' },
  //     { src: '/assets/images/gallery/IMG_2.webp', height: 200, width: 300, buttonWidth: '98%' },
  //   ],
  //   // { src: '/assets/images/gallery/IMG_0.JPG', height: 200, width: 150, buttonWidth: '99%' },
  //   { src: '/assets/images/gallery/IMG_1.webp', height: 200, width: 150, buttonWidth: '99%' },
  //   [
  //     { src: '/assets/images/gallery/IMG_6.webp', height: 200, width: 300, buttonWidth: '98%' },
  //     { src: '/assets/images/gallery/IMG_5.webp', height: 200, width: 300, buttonWidth: '98%' },
  //   ],
  //   { src: '/assets/images/gallery/IMG_8.webp', height: 200, width: 150, buttonWidth: '99%' },
  //   [
  //     { src: '/assets/images/gallery/IMG_9.webp', height: 200, width: 300, buttonWidth: '98%' },
  //     { src: '/assets/images/gallery/IMG_4.webp', height: 200, width: 300, buttonWidth: '98%' },
  //   ],
  // ];
  // { src: '/assets/images/gallery/IMG_7.JPG', height: 200, width: 300, buttonWidth: '95%' },
  // { src: '/assets/images/gallery/IMG_10.JPG', height: 200, width: 300, buttonWidth: '95%' },

  function SamplePrevArrow({ className, style, onClick }) {
    return (
      <div className={`prev-arrow ${className}`} style={{ ...style, display: 'block' }} onClick={onClick}>
        <ArrowSvg className='arrow' style={{ transform: 'rotate(90deg)', marginRight: '0.2em' }} />
      </div>
    );
  }

  function SampleNextArrow({ className, style, onClick }) {
    return (
      <div className={`next-arrow ${className}`} style={{ ...style, display: 'block' }} onClick={onClick}>
        <ArrowSvg className='arrow' style={{ transform: 'rotate(-90deg)', marginLeft: '0.2em' }} />
      </div>
    );
  }

  const sliderSettings = {
    className: 'photoSlider',
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  return (
    <Slider {...sliderSettings}>
      {sliderImages.map((image, index) => (
        <>
          {index % 2 === 0 ? (
            // <div className='photoSlider_slideWrapper' key={image.src}>
            <div className={styles.slideWrapper} key={image.src}>
              <div style={{ width: image.buttonWidth }}>
                <GalleryImage
                  imageSrc={image.src}
                  imageHeight={image.height}
                  imageWidth={image.width}
                  buttonWidth={image.buttonWidth}
                />
              </div>
            </div>
          ) : (
            <div className={styles.slideWrapper} key={image[0].src}>
              <div
                className={`${styles.slideWrapper} ${styles['slideWrapper--stacked']}`}
                style={{ width: image[0].buttonWidth }}
              >
                <GalleryImage
                  imageSrc={image[0].src}
                  imageHeight={image[0].height}
                  imageWidth={image[0].width}
                  buttonWidth={image[0].buttonWidth}
                />
                <GalleryImage
                  imageSrc={image[1].src}
                  imageHeight={image[1].height}
                  imageWidth={image[1].width}
                  buttonWidth={image[1].buttonWidth}
                />
              </div>
            </div>
          )}
        </>
      ))}
    </Slider>
  );
};

export default PhotoSlider;
