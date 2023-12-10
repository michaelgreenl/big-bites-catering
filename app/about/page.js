import { generateMetadata } from '@/hooks/generateMetadata';

export const metadata = generateMetadata('about');

export default function About() {
  return (
    <main className='about'>
      <h1>About</h1>
    </main>
  );
}
