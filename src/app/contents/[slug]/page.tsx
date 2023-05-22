import MarkdownViewer from '@/components/MarkdownViewer';
import { getContentData, getRecentContents } from '@/service/contents';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getContentData(slug);
  return {
    title,
    description,
  };
}

export default async function ContentPage({ params: { slug } }: Props) {
  const content = await getContentData(slug);
  return (
    <>
      <h1 className="m-4">#{content.title}</h1>
      <MarkdownViewer texts={content.texts} />
    </>
  );
}

export async function generateStaticParams() {
  const contents = await getRecentContents();
  return contents.map((content) => ({
    slug: content.path,
  }));
}
