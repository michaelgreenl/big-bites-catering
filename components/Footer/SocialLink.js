import styles from './footer.module.scss';
import Image from 'next/legacy/image';
import Link from 'next/link';

const SocialLink = ({ href, src, alt }) => {
  return (
    <div className={styles.logo}>
      <Link href={href}>
        <Image src={src} alt={alt} width={100} height={100} layout='responsive' />
      </Link>
    </div>
  );
};

export default SocialLink;
