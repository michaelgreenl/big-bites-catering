'use client';

import { useState } from 'react';
import './GalleryImage.css';
import Image from 'next/legacy/image';

const GalleryImage = ({ imageSrc, imageHeight, imageWidth }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {!isActive && (
        // <div className='gallery-button-wrapper' style={{ width: buttonWidth }}>
        <button className='gallery-image-button' onClick={() => setIsActive(true)}>
          {/* <button className='gallery-image-button' onClick={() => setIsActive(true)} style={{ width: buttonWidth }}> */}
          <Image
            src={imageSrc}
            alt='Downtown Detroit Catering Gallery Image'
            layout='responsive'
            height={imageHeight}
            width={imageWidth}
          />
        </button>
        // </div>
      )}
    </>
  );
};

export default GalleryImage;
