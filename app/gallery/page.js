import { generateMetadata } from '@/hooks/generateMetadata';

export const metadata = generateMetadata('gallery');

export default function Gallery() {
  return (
    <main className='gallery'>
      <h1>Gallery</h1>
    </main>
  );
}
