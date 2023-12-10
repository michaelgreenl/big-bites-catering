import { promises as fs } from 'fs';

export async function generateMetadata(page) {
  const file = await fs.readFile(process.cwd() + '/app/_data/data.json', 'utf8');
  const data = JSON.parse(file);

  return {
    title: data.metadata[`${page}`].title,
    description: data.metadata[`${page}`].description,
    icons: data.metadata.icons,
    manifest: '/site.webmanifest',
  };
}
