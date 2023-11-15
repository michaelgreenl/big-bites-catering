'use client';

import styles from './galleryImage.module.scss';
import { useState } from 'react';
import Image from 'next/legacy/image';

const GalleryImage = ({ imageSrc, imageHeight, imageWidth }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {!isActive && (
        // <div className='gallery-button-wrapper' style={{ width: buttonWidth }}>
        <button className={styles.imageButton} onClick={() => setIsActive(true)}>
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
