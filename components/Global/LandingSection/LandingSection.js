import styles from './landingSection.module.scss';

const LandingSection = ({ landingContent, backgroundImage, backgroundImagePosition, backgroundOpacity }) => {
  return (
    <section
      className={styles.landing}
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: `${backgroundImagePosition}`,
        backgroundRepeat: 'no-repeat',
        '--background-opacity': backgroundOpacity,
      }}
    >
      <div className={styles.cont}>{landingContent}</div>
    </section>
  );
};

export default LandingSection;
