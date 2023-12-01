import styles from './galleryImage.module.scss';
import Image from 'next/legacy/image';

const GalleryImage = ({ imageSrc, imageHeight, imageWidth, setActiveSlide, slide }) => {
  return (
    <button className={styles.imageButton} onClick={() => setActiveSlide(slide)}>
      <Image
        src={imageSrc}
        alt='Downtown Detroit Catering Gallery Image'
        layout='responsive'
        height={imageHeight}
        width={imageWidth}
      />
    </button>
  );
};

export default GalleryImage;
