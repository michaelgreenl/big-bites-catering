import LandingSection from '@/components/LandingSection/LandingSection';
import landingBackgroundImage from '@/public/assets/images/backgrounds/wedding-catering-background.webp';

export default function WeddingCatering() {
  return (
    <main className='wedding'>
      <LandingSection
        backgroundImage={landingBackgroundImage}
        backgroundImagePosition='80% 100%'
        backgroundOpacity={0.4}
      />
    </main>
  );
}
