import { getRestContents } from '@/service/contents';
import ContentCard from './ContentCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselContents() {
  const contents = await getRestContents();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">Recently Published</h2>
      <MultiCarousel>
        {contents.map((content) => (
          <ContentCard key={content.path} content={content} />
        ))}
      </MultiCarousel>
    </section>
  );
}
