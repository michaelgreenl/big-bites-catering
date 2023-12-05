import styles from './footer.module.scss';
import FooterLink from './FooterLink';

const LinkList = ({ data, header, className, linkItemClassName, linkHeaderClassName, linkTextClassName }) => {
  return (
    <div className={`${styles.listWrapper} ${styles[`${className}`]}`}>
      <h5 className={styles.header}>{header}</h5>
      <ul className={styles.list}>
        {data.map((link) => (
          <FooterLink
            key={link.text}
            href={link.href}
            text={link.text}
            textHeader={link.textHeader}
            linkItemClassName={linkItemClassName}
            linkHeaderClassName={linkHeaderClassName}
            linkTextClassName={linkTextClassName}
          />
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
