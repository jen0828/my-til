import FilterableContents from '@/components/FilterableContents';
import { getAllContents } from '@/service/contents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'All posts related to software development',
};

export default async function ContentsPage() {
  const contents = await getAllContents();
  const categories = [...new Set(contents.map((content) => content.category))];

  return <FilterableContents contents={contents} categories={categories} />;
}
