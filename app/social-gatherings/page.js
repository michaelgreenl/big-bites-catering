import LandingSection from '@/components/Global/LandingSection/LandingSection';
import landingBackgroundImage from '@/public/assets/images/backgrounds/social-gatherings-background.webp';
import { generateMetadata } from '@/hooks/generateMetadata';

export const metadata = generateMetadata('social-gatherings');

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
