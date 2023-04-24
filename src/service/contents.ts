import { readFile } from 'fs/promises';
import path from 'path';

export type Content = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  recent: boolean;
};

export type ContentData = Content & {
  texts: string;
};

export async function getRecentContents(): Promise<Content[]> {
  return getAllContents() //
    .then((posts) => posts.filter((post) => post.recent));
}

export async function getRestContents(): Promise<Content[]> {
  return getAllContents() //
    .then((posts) => posts.filter((post) => !post.recent));
}

export async function getAllContents(): Promise<Content[]> {
  const filePath = path.join(process.cwd(), 'data', 'contents.json');
  return readFile(filePath, 'utf-8')
    .then<Content[]>(JSON.parse)
    .then((contents) => contents.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getContentData(fileName: string): Promise<ContentData> {
  const filePath = path.join(
    process.cwd(),
    'data',
    'contents',
    `${fileName}.md`
  );

  const metadata = await getAllContents().then((contents) =>
    contents.find((content) => content.path === fileName)
  );

  if (!metadata) throw new Error(`No ${fileName} exists`);

  const texts = await readFile(filePath, 'utf-8');
  return { ...metadata, texts };
}
