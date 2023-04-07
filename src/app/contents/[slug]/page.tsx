import MarkDownViewer from '@/components/MarkDownViewer';
import { getContentData } from '@/service/contents';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ContentPage({ params: { slug } }: Props) {
  const content = await getContentData(slug);
  return (
    <>
      <h1>{content.title}</h1>
      <MarkDownViewer texts={content.texts} />
    </>
  );
}
