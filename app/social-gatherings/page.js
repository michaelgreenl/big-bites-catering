import LandingSection from '@/components/LandingSection/LandingSection';
import landingBackgroundImage from '@/public/assets/images/backgrounds/social-gatherings-background.webp';

export default function SocialGatherings() {
  return (
    <main className='social'>
      <LandingSection
        backgroundImage={landingBackgroundImage}
        backgroundImagePosition='47% 100%'
        backgroundOpacity={0.35}
      />
    </main>
  );
}
