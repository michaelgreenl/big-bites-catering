import styles from '@/app/_scss/page.module.scss';
import Link from 'next/link';
import Image from 'next/legacy/image';
import Button from '@/components/Global/Button/Button';
import landingBackgroundImage from '@/public/assets/images/backgrounds/landing-background.webp';
import LandingSection from '@/components/Global/LandingSection/LandingSection';
import ServicesList from '@/components/Home/ServicesList/ServicesList';
import PhotoSlider from '@/components/Gallery/PhotoSlider/PhotoSlider';
import ServiceCards from '@/components/Home/ServiceCard/ServiceCards';
import { ArrowSvg } from '@/components/svgs/ArrowSvg';
import Logos from '@/components/Home/Logos/Logos';
import { generateMetadata } from '@/hooks/generateMetadata';

export const metadata = generateMetadata('home');

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingSection
        backgroundImage={landingBackgroundImage}
        backgroundImagePosition='37% 100%'
        backgroundOpacity={0.45}
        landingContent={
          <>
            <div className={styles.landing_logo}>
              <Image
                src='/assets/images/logo.webp'
                alt='Bigg Bites Catering'
                width={250}
                height={120}
                layout='responsive'
                quality={100}
                priority
              />
            </div>
            <h1 className={styles.landing_header}>
              QUALITY CUISINE <br /> & SERVICE
            </h1>
            <div className={styles.landing_ctaButtons}>
              <Link href='/contact'>
                <Button className={styles.ctaBtn} text='Contact' style='primary' />
              </Link>
              <Link href='/menu'>
                <Button className={styles.ctaBtn} text='View Menu' style='primary' />
              </Link>
            </div>
          </>
        }
      />
      <section className={styles.services + ' ' + styles.mainSection}>
        <header>
          <h2>Services</h2>
          <hr />
        </header>
        <ServiceCards />
        <section className={styles.SubContent}>
          <h3 className={styles.Header}>WE ACCOMMODATE ALL EVENTS</h3>
          <ServicesList />
          <Link href='/menu'>
            <Button className={styles.Button} text='View Menu' style='primary' />
          </Link>
        </section>
      </section>
      <section className={styles.intro + ' ' + styles.mainSection}>
        <header>
          <h2>Who We Are</h2>
          <hr />
        </header>

        <div className={styles.subSectionWrapper}>
          <section className={styles.subSection}>
            <article className={styles.Article}>
              <h3 className={styles.Header}>Bigg Bites Catering</h3>
              <p className={styles.Text}>
                Bigg Bites Detroit catering company has been proud to service the metro for years. It&#39;s with the
                upmost joy that we provide excellent taste, service, and experience. No matter the event, we provide
                wedding catering, corporate catering, large event catering and more.
                <br />
                <br />
                Our years of experience and expertise is equipped to handle and perform to satisfy your guest&#39;s. We
                understand the pressure to prepare for just about any event can be overwhelming, allow us to take
                catering off your plate from start to finish.
              </p>
              <Link className={styles.CtaLink} href='/gallery'>
                <Button
                  className={styles.Button}
                  text='More of our Environment'
                  style='secondary'
                  iconAfter={<ArrowSvg className={styles.Icon} />}
                />
              </Link>
            </article>
            <PhotoSlider />
          </section>
          <hr className={styles.subSectionSeparator} />
          <section className={styles.subSection}>
            <article className={styles.Article}>
              <h3 className={styles.Header}>Our Customers</h3>
              <p className={styles.Text}>
                Bigg Bites catering has been blessed with the opportunity to service Detroit and the surround areas for
                years. We have gotten the chance feed the hungry stomach of guest from all over and never once have
                dropped the ball. To be invited back out has always truly been a compliment every time.
                <br />
                <br />
                We continue to work extra hard at the faith of our guest as we continue on in building longevity and
                relationships. Contact us today and lets began the planning process for your event.
              </p>
              <div className={styles.CtaButtonWrapper}>
                <Link className={styles.CtaLink} href='/about'>
                  <Button className={styles.Button} text='About Bigg Bites' style='secondary' />
                </Link>
                <Link className={styles.CtaLink} href='/contact'>
                  <Button
                    className={styles.Button}
                    text='Contact Us'
                    style='secondary'
                    iconAfter={<ArrowSvg className={styles.Icon} />}
                  />
                </Link>
              </div>
            </article>
            <Logos />
          </section>
        </div>
      </section>
    </main>
  );
}
