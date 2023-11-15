import styles from './footer.module.scss';
import { promises as fs } from 'fs';
import Image from 'next/legacy/image';
import SocialLink from './SocialLink';
import CtaButtons from './CtaButtons';
import LinkList from './LinkList';

const Footer = async () => {
  const footerFile = await fs.readFile(process.cwd() + '/app/_data/footer.json', 'utf8');
  const footerData = JSON.parse(footerFile);

  return (
    <footer className={styles.footer}>
      <header className={styles.footer_header}>
        <div className={styles.logo}>
          <Image src='/assets/images/logo.webp' alt='Bigg Bites Logo' width={270} height={135} layout='responsive' />
        </div>
        <div className={styles.socials}>
          {footerData.socialLinks.map((link) => (
            <SocialLink key={link.href} href={link.href} src={link.image.src} alt={link.image.alt} />
          ))}
        </div>
        <CtaButtons />
        <LinkList data={footerData.links.contact} className={'listWrapper--contact'} />
      </header>
      <section className={styles.links}>
        <LinkList data={footerData.links.company} header='Company' />
        <LinkList data={footerData.links.services} header='Services' />
        <LinkList data={footerData.links.social} header='Social' />
        <LinkList data={footerData.links.contact} header='Contact' className={'listWrapper--contact'} />
        <CtaButtons />
        <LinkList
          data={footerData.links.locations}
          header='Locations'
          className={'listWrapper--locations'}
          linkItemClassName={'link--locations'}
          linkHeaderClassName={'text--locations'}
          linkTextClassName={'text--address'}
        />
      </section>
      <div className={styles.footer_footer}>
        <span className={styles.copyright}>
          &copy; 2023 Bigg Bites Catering
          <br />
          <span className={styles.separator}> | </span>
          <u>Terms of use</u> | <u>Copyright Laws</u> | <u>Cookies Policy</u>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
