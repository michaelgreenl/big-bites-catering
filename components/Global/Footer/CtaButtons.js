import styles from './footer.module.scss';
import Link from 'next/link';
import Button from '../Button/Button';
import { ArrowSvg } from '../../svgs/ArrowSvg';

const CtaButtons = () => {
  return (
    <div className={`${styles.listWrapper} ${styles['listWrapper--buttons']}`}>
      <Link className={styles.link} href='/menu'>
        <Button
          className={styles.button}
          style='secondary'
          text='View Menu'
          iconAfter={<ArrowSvg className={styles.svg} />}
        />
      </Link>
      <Link className={styles.link} href='/contact'>
        <Button
          className={styles.button}
          style='secondary'
          text='Book Now'
          iconAfter={<ArrowSvg className={styles.svg} />}
        />
      </Link>
    </div>
  );
};

export default CtaButtons;
