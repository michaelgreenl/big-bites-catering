import styles from './logos.module.scss';
import { promises as fs } from 'fs';
import Image from 'next/legacy/image';

const Logos = async () => {
  const logoFile = await fs.readFile(process.cwd() + '/app/_data/home.json', 'utf8');
  const logoData = JSON.parse(logoFile);

  return (
    <div className={styles.Logos}>
      {logoData.logos.map((logo) => (
        <div className={styles.Cont} key={logo.name}>
          <div className={styles.Padd} style={logo.style}>
            <Image
              src={logo.image}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              layout='responsive'
              unoptimized
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Logos;
