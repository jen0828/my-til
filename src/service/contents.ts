import { readFile } from 'fs/promises';
import path from 'path';

export type Content = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  popular: boolean;
};

export type ContentData = Content & {
  contentTexts: string;
};

export async function getPopularContents(): Promise<Content[]> {
  return getAllContents() //
    .then((posts) => posts.filter((post) => post.popular));
}

export async function getRestContents(): Promise<Content[]> {
  return getAllContents() //
    .then((posts) => posts.filter((post) => !post.popular));
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
  console.log(filePath);
  const metadata = await getAllContents().then((contents) =>
    contents.find((content) => content.path === fileName)
  );

  if (!metadata) throw new Error(`No ${fileName} exists`);

  const contentTexts = await readFile(filePath, 'utf-8');
  return { ...metadata, contentTexts };
}
