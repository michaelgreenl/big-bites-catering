import { promises as fs } from 'fs';

export async function generateMetadata(page) {
  const file = await fs.readFile(process.cwd() + '/app/_data/data.json', 'utf8');
  const data = JSON.parse(file);

  return data.metadata[`${page}`];
}
