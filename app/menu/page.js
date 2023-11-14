import LandingSection from '@/components/LandingSection/LandingSection';
import landingBackgroundImage from '@/public/assets/images/backgrounds/menu-background.webp';

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
