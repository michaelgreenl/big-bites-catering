import styles from './serviceCards.module.scss';
import Link from 'next/link';
import Image from 'next/legacy/image';
import Button from '../Button/Button';
import { ArrowSvg } from '../svgs/ArrowSvg';

const ServiceCard = ({
  href,
  iconSrc,
  iconAlt,
  backgroundIconSrc,
  backgroundIconPosition,
  backgroundIconSize,
  header,
  text,
}) => {
  return (
    <div
      className={`${styles.serviceCard}`}
      style={{
        '--background-src': `url(${backgroundIconSrc})`,
        '--background-pos': backgroundIconPosition,
        '--background-size': backgroundIconSize,
      }}
    >
      <header className={`${styles.header}`}>
        <div className={`${styles.icon}`}>
          <Image src={iconSrc} alt={iconAlt} width='100px' height='100px' />
        </div>
        <h3 className={`${styles.text}`}>{header}</h3>
      </header>
      <p className={`${styles.text}`}>{text}</p>
      <div className={`${styles.buttons}`}>
        <Link className={`${styles.link}`} href='/contact'>
          <Button className={`${styles.button}`} text='Contact' style='secondary' />
        </Link>
        <Link className={`${styles.link}`} href={href}>
          <Button
            className={`${styles.button}`}
            iconAfter={<ArrowSvg className={`${styles.arrow}`} />}
            text='Learn More'
            style='secondary'
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
