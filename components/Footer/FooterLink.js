import styles from './footer.module.scss';
import Link from 'next/link';

const FooterLink = ({ href, textHeader, text, linkItemClassName, linkHeaderClassName, linkTextClassName }) => {
  const lines = !text.includes('<br />')
    ? text
    : text.split('<br />').map((line) => (
        <>
          {line}
          <br />
        </>
      ));

  return (
    <li className={styles.item}>
      <Link className={`${styles.link} ${styles[`${linkItemClassName}`]}`} href={href}>
        {textHeader && <span className={`${styles.text} ${styles[`${linkHeaderClassName}`]}`}>{textHeader}</span>}
        <span className={`${styles.text} ${styles[`${linkTextClassName}`]}`}>{lines}</span>
      </Link>
    </li>
  );
};

export default FooterLink;
