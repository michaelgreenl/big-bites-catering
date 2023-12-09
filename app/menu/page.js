import LandingSection from '@/components/Global/LandingSection/LandingSection';
import landingBackgroundImage from '@/public/assets/images/backgrounds/menu-background.webp';
import { generateMetadata } from '@/hooks/generateMetadata';

export const metadata = generateMetadata('menu');

export default function Menu() {
  return (
    <main className='menu'>
      <LandingSection
        backgroundImage={landingBackgroundImage}
        backgroundImagePosition='39% 100%'
        backgroundOpacity={0.25}
      />
    </main>
  );
}
