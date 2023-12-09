import { promises as fs } from 'fs';
import './contact.scss';
import { generateMetadata } from '@/hooks/generateMetadata';

export const metadata = generateMetadata('contact');

export default async function Contact() {
  const contactFile = await fs.readFile(process.cwd() + '/app/_data/contact.json', 'utf8');
  const contactData = JSON.parse(contactFile);

  return (
    <main className='contact'>
      <form>
        {contactData.fields.map((field) => (
          <span key={field.name}>{field.name}</span>
        ))}
      </form>
    </main>
  );
}
