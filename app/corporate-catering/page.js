import LandingSection from '@/components/LandingSection/LandingSection';
import landingBackgroundImage from '@/public/assets/images/backgrounds/corporate-catering-background.webp';

export default function CorporateCatering() {
  return (
    <main className='corporate'>
      <LandingSection
        backgroundImage={landingBackgroundImage}
        backgroundImagePosition='35% 100%'
        backgroundOpacity={0.35}
      />
    </main>
  );
}
