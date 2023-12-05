import { promises as fs } from 'fs';
import './contact.scss';

export default async function Contact() {
  const file = await fs.readFile(process.cwd() + '/app/_data/contact.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <main className='contact'>
      <form>
        {data.fields.map((field) => (
          <span key={field.name}>{field.name}</span>
        ))}
      </form>
    </main>
  );
}
