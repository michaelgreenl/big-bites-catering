import LandingSection from '@/components/Global/LandingSection/LandingSection';
import landingBackgroundImage from '@/public/assets/images/backgrounds/corporate-catering-background.webp';
import { generateMetadata } from '@/hooks/generateMetadata';

export const metadata = generateMetadata('corporate-catering');

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
