import styles from './serviceCards.module.scss';
import ServiceCard from './ServiceCard';

const ServiceCards = () => {
  return (
    <section className={styles.serviceCards}>
      <ServiceCard
        href='/wedding-catering'
        iconSrc='/assets/svgs/wedding-catering/wedding-catering-color.svg'
        backgroundIconSrc='/assets/svgs/wedding-catering/wedding-catering-color.svg'
        backgroundIconPosition='-150% -120%'
        backgroundIconSize='115% 110%'
        iconAlt='Detroit Wedding Catering'
        header='Wedding Catering'
        text='On the most important and memorable day of your life, I should be no less than perfect. Lets plan yours now!'
      />
      <ServiceCard
        href='/corporate-catering'
        iconSrc='/assets/svgs/tie/tie-color.svg'
        iconAlt='Detroit Corporate Catering'
        backgroundIconSrc='/assets/svgs/tie/tie-color.svg'
        backgroundIconPosition='-65% -30%'
        backgroundIconSize='135% 110%'
        header='Corporate Catering'
        text='Amongst the many things you have to plan, catering should be the less of your worries and your greatest connection.'
      />
      <ServiceCard
        href='/social-gatherings'
        iconSrc='/assets/svgs/social-gatherings/social-gatherings-color.svg'
        iconAlt='Detroit Social Catering'
        backgroundIconSrc='/assets/svgs/social-gatherings/social-gatherings-color.svg'
        backgroundIconPosition='-35% -10%'
        backgroundIconSize='135% 110%'
        header='Social Gatherings'
        text='Every event starts with activity, then food. Catering is the highlight of every event, lets start with yours.'
      />
    </section>
  );
};

export default ServiceCards;
